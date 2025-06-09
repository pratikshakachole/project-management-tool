# backend/routes.py
from flask import Blueprint, request, jsonify
from models import Project, Task
from extensions import db

api = Blueprint('api', __name__)

@api.route('/projects', methods=['GET', 'POST'])
def manage_projects():
    if request.method == 'POST':
        data = request.json
        if Project.query.filter_by(name=data['name']).first():
            return jsonify({'error': 'Project already exists'}), 400
        new_project = Project(name=data['name'])
        db.session.add(new_project)
        db.session.commit()
        return jsonify({'message': 'Project created'}), 201
    projects = Project.query.all()
    return jsonify([{'id': p.id, 'name': p.name} for p in projects])

@api.route('/projects/<int:project_id>/tasks', methods=['GET', 'POST'])
def manage_tasks(project_id):
    if request.method == 'POST':
        data = request.json
        new_task = Task(title=data['title'], status=data['status'], project_id=project_id)
        db.session.add(new_task)
        db.session.commit()
        return jsonify({'message': 'Task added'}), 201
    tasks = Task.query.filter_by(project_id=project_id).all()
    return jsonify([{'id': t.id, 'title': t.title, 'status': t.status} for t in tasks])

@api.route('/tasks/<int:task_id>', methods=['PATCH'])
def update_task(task_id):
    data = request.json
    task = Task.query.get(task_id)
    task.status = data['status']
    db.session.commit()
    return jsonify({'message': 'Task updated'})
