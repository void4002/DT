// src/components/projectmodal.js
import React, { useState } from 'react';

const AddProjectModal = ({ isOpen, onClose, onAddProject }) => {
  const [projectData, setProjectData] = useState({
    // Initialize with default project data if needed
    // For example: title: '', description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    // You can perform validation on projectData if needed
    onAddProject(projectData);
    // Clear or reset modal state as needed
    setProjectData({
      // Reset to default project data
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : 'modal-closed'}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>Add Project</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={projectData.title} onChange={handleInputChange} />
        {/* Add other input fields for project data as needed */}
        <button onClick={handleAddProject}>Add Project</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddProjectModal;
