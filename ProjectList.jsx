import React from 'react';

const ProjectList = ({ projects, onSelect }) => (
  <div className="mb-4">
    <h1 className="text-xl font-bold">Projects</h1>
    {projects.map(project => (
      <button key={project.id} onClick={() => onSelect(project)} className="block mt-2 bg-blue-500 text-white p-2 rounded">
        {project.name}
      </button>
    ))}
  </div>
);

export default ProjectList;