// CourseForm.jsx
import React, { useState } from 'react';
import './Overview.css';
import SubmoduleSelector from './SubmoduleSelector.jsx';
import axios from 'axios';

const CourseForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [modules, setModules] = useState([
    { title: '', submodules: [{ type: '', content: {} }] },
  ]);

  const handleAddModule = () => {
    setModules([...modules, { title: '', submodules: [{ type: '', content: {} }] }]);
  };

  const handleAddSubmodule = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].submodules.push({ type: '', content: {} });
    setModules(newModules);
  };

  const handleModuleChange = (moduleIndex, e) => {
    const newModules = [...modules];
    newModules[moduleIndex][e.target.name] = e.target.value;
    setModules(newModules);
  };

  const handleSubmoduleChange = (moduleIndex, submoduleIndex, updatedSubmodule) => {
    const newModules = [...modules];
    newModules[moduleIndex].submodules[submoduleIndex] = updatedSubmodule;
    setModules(newModules);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      courseName,
      duration,
      description,
      modules,
    };
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5000/api/courses', formData);
      console.log('Course saved:', response.data);
      alert('Course saved successfully!');
    } catch (error) {
      console.error('Error saving course:', error);
      alert('Error saving course');
    }
  };

  return (
    <div className="course-form-container">
      {!showForm && (
        <button className="add-course-btn" onClick={() => setShowForm(true)}>
          Add Course +
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="course-form">
          <div className="form-group">
            <label>Course Name:</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Duration:</label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Course Modules:</label>
            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="module">
                <label>Module Title:</label>
                <input
                  type="text"
                  name="title"
                  value={module.title}
                  onChange={(e) => handleModuleChange(moduleIndex, e)}
                  required
                  className="form-input"
                />

                {module.submodules.map((submodule, subIndex) => (
                  <div key={subIndex} className="submodule">
                    <SubmoduleSelector
                      moduleIndex={moduleIndex}
                      submoduleIndex={subIndex}
                      submodule={submodule}
                      onSubmoduleChange={handleSubmoduleChange}
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="add-submodule-btn"
                  onClick={() => handleAddSubmodule(moduleIndex)}
                >
                  Add Submodule
                </button>
              </div>
            ))}

            <button type="button" className="add-module-btn" onClick={handleAddModule}>
              Add Module
            </button>
          </div>

          <button type="submit" className="submit-btn">Submit Course</button>
        </form>
      )}
    </div>
  );
};

export default CourseForm;
