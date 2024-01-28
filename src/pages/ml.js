import React, { useState } from 'react';
import Modal from 'react-modal';
import Navbar from '../components/navbar';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectPhoneNumber, setNewProjectPhoneNumber] = useState('');
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const addProject = () => {
    // Add logic for adding a new project
    const newProject = {
      id: Date.now(),
      name: newProjectName,
      description: newProjectDescription,
      phoneNumber: newProjectPhoneNumber,
      file1,
      file2,
    };
    setProjects([...projects, newProject]);
    setNewProjectName('');
    setNewProjectDescription('');
    setNewProjectPhoneNumber('');
    setFile1(null);
    setFile2(null);
    closeModal(); // Close the modal after handling the logic
  };

  const displayDescription = (project) => {
    setSelectedProject(project);
    openModal();
  };

  return (
    <div>
      <Navbar/>
    <section className="bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex flex-col md:flex-row items-center justify-between">
          Machine Learning
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex flex-col md:flex-row items-center justify-between">
          Projects
          <button
            className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={openModal}
          >
            +
          </button>
        </h2>

        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <button
                className="text-blue-500 underline cursor-pointer"
                onClick={() => displayDescription(project)}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Project Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
              {selectedProject ? (
                <>
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                  <p>{selectedProject.description}</p>
                  <p>Phone Number: {selectedProject.phoneNumber}</p>
                  {selectedProject.file1 && (
                    <p>
                      File 1: <a href={selectedProject.file1}>Download File 1</a>
                    </p>
                  )}
                  {selectedProject.file2 && (
                    <p>
                      File 2: <a href={selectedProject.file2}>Download File 2</a>
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-4">Add Project</h2>
                  {/* Your project form goes here */}
                  <form>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="projectName"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter project name"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="projectDescription"
                      >
                        Project Description
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter project description"
                        value={newProjectDescription}
                        onChange={(e) => setNewProjectDescription(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="projectPhoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="projectPhoneNumber"
                        name="projectPhoneNumber"
                        className="border rounded w-full py-2 px-3"
                        placeholder="Enter phone number"
                        value={newProjectPhoneNumber}
                        onChange={(e) => setNewProjectPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="file1"
                      >
                        Upload File 1
                      </label>
                      <input
                        type="file"
                        id="file1"
                        name="file1"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFile1(URL.createObjectURL(e.target.files[0]))}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="file2"
                      >
                        Upload File 2
                      </label>
                      <input
                        type="file"
                        id="file2"
                        name="file2"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFile2(URL.createObjectURL(e.target.files[0]))}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={addProject}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Add Project
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="ml-2 text-gray-600 px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </section>
    </div>
  );
};

export default Projects;
