from flask import Flask, jsonify
from flask import Flask
from extensions import db
from routes import api  # Import the Blueprint
from models import Project, Task

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'  # Or your DB URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(api)  # Register the Blueprint

@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the Project Management API'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)




   