import React, { useEffect, useState } from 'react';
import axios from 'axios';

const statuses = ['To Do', 'In Progress', 'Done'];

const KanbanBoard = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${projectId}/tasks`).then(res => setTasks(res.data));
  }, [projectId]);

  const handleDrop = (taskId, status) => {
    axios.patch(`http://localhost:5000/tasks/${taskId}`, { status }).then(() => {
      setTasks(prev => prev.map(task => task.id === taskId ? { ...task, status } : task));
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {statuses.map(status => (
        <div key={status} className="bg-gray-100 p-2 rounded">
          <h2 className="font-bold mb-2">{status}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <div key={task.id} draggable onDragEnd={() => handleDrop(task.id, status)} className="bg-white p-2 rounded shadow mb-2">
              {task.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;