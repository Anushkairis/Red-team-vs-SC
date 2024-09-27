// SubmoduleSelector.jsx
import React, { useState } from 'react';
import ReadingTemplate from './ReadingTemplate.jsx';
import VideoTemplate from './VideoTemplate.jsx';
import QuizTemplate from './QuizTemplate';


const SubmoduleSelector = ({ moduleIndex, submoduleIndex, submodule, onSubmoduleChange }) => {
  const [selectedOption, setSelectedOption] = useState(submodule.type || '');

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    // Initialize content based on selected type
    let content = {};
    switch (value) {
      case 'reading':
        content = { heading: '', description: '' };
        break;
      case 'video':
        content = { videoUrl: '' };
        break;
      case 'quiz':
        content = { questions: [{ question: '', options: ['', '', '', ''] }] };
        break;
      case 'compiler':
        content = { compilerType: '', problemStatement: '' };
        break;
      default:
        content = {};
    }
    onSubmoduleChange(moduleIndex, submoduleIndex, { type: value, content });
  };

  const handleContentChange = (updatedContent) => {
    onSubmoduleChange(moduleIndex, submoduleIndex, { type: selectedOption, content: updatedContent });
  };

  return (
    <div className="submodule-selector">
      <select value={selectedOption} onChange={handleOptionChange} className="submodule-select">
        <option value="">Select Submodule Type</option>
        <option value="video">Video</option>
        <option value="reading">Reading</option>
        <option value="quiz">Quiz</option>
        <option value="compiler">Lab</option>
      </select>

      {selectedOption === 'reading' && (
        <ReadingTemplate
          content={submodule.content}
          onContentChange={handleContentChange}
        />
      )}
      {selectedOption === 'video' && (
        <VideoTemplate
          content={submodule.content}
          onContentChange={handleContentChange}
        />
      )}
       {selectedOption === 'quiz' && (
        <QuizTemplate
          content={submodule.content}
          onContentChange={handleContentChange}
        />
      )}
      {selectedOption === 'compiler' && (
        <ReadingTemplate
          content={submodule.content}
          onContentChange={handleContentChange}
        />
      )} 
    </div>
  );
};

export default SubmoduleSelector;
