// frontend/src/components/TaskCard.jsx
import React from 'react';

const TaskCard = ({ task, onDragEnd }) => {
  return (
    <div
      draggable
      onDragEnd={() => onDragEnd(task.id, task.status)}
      className="bg-white p-2 rounded shadow mb-2 cursor-grab hover:shadow-md transition"
    >
      <p>{task.title}</p>
    </div>
  );
};

export default TaskCard;
