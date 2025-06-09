import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import ProjectList from './components/ProjectList';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios.get('/api/projects').then(res => setProjects(res.data));
  }, []);

  return (
    <div className="p-4">
      <ProjectList projects={projects} onSelect={setSelectedProject} />
      {selectedProject && <KanbanBoard projectId={selectedProject.id} />}
    </div>
  );
};

export default App;
