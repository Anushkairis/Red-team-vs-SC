// ReadingTemplate.jsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling


const ReadingTemplate = ({ content, onContentChange }) => {
  const [heading, setHeading] = useState(content.heading || '');
  const [description, setDescription] = useState(content.description || '');
  const [isSaved, setIsSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(true); // Initially in edit mode

  // Function to handle save operation
  const handleSave = async () => {
    const readingData = { heading, description };

    // Call the function to handle the save process
    try {
      // Ensure that onContentChange is being called correctly
      await onContentChange(readingData);

      // Set save and editing states
      setIsSaved(true);
      setIsEditing(false); // Exit editing mode after saving
      console.log('Content saved successfully:', readingData);
    } catch (error) {
      console.error('Error saving reading content:', error);
      // Optionally, display an error message to the user
      alert('Error saving content. Please try again.');
    }
  };

  // Function to re-enable editing
  const handleEdit = () => {
    setIsEditing(true); // Reopen the editor in editing mode
  };

  // Update description as the user types
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <div className="reading-template">
      {isEditing ? (
        <div className="document-editor">
          <input
            type="text"
            placeholder="Enter heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="document-heading"
          />

          {/* Quill editor for rich text content (description) */}
          <ReactQuill
            value={description}
            onChange={handleDescriptionChange}
            className="document-quill-editor"
            modules={ReadingTemplate.modules}
            formats={ReadingTemplate.formats}
            placeholder="Enter your content (you can add images, tables, lists, etc.)"
          />
        </div>
      ) : (
        <div className="document-small-box">
          <h3>{heading}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="document-content"
          ></div>
          <button onClick={handleEdit} className="document-edit-btn">
            Edit
          </button>
        </div>
      )}

      {/* Save Button is placed outside of document-editor but within isEditing */}
      {isEditing && (
        <button onClick={handleSave} className="document-save-btn">
          Save
        </button>
      )}
    </div>
  );
};

// Quill modules for the toolbar
ReadingTemplate.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    ['link', 'image'],
    ['clean'], // Remove formatting button
  ],
};

// Quill formats that are allowed in the editor
ReadingTemplate.formats = [
  'header',
  'font',
  'list',
  'bullet',
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'link',
  'image',
];

export default ReadingTemplate;
