# Project Management Tool

## Setup Instructions

### Backend (Flask)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python
>>> from app import db
>>> db.create_all()
>>> exit()
python app.py
```

### Frontend (React)
```bash
cd frontend
npm install
npm start
```

### Deploy
- Use Render/Heroku for backend.
- Use Vercel/Netlify for frontend.

### API Endpoints
- `GET /projects`
- `POST /projects`
- `GET /projects/<project_id>/tasks`
- `POST /projects/<project_id>/tasks`
- `PATCH /tasks/<task_id>`

### Features
- Create projects
- Add tasks to projects
- Drag-and-drop Kanban board

### Live Demo
Include your deployed links here.
