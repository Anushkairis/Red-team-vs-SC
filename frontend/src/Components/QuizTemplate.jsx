import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to make API requests

const QuizTemplate = ({ content, onContentChange }) => {
  const [questions, setQuestions] = useState(content.questions || []);
  const [saving, setSaving] = useState(false); // To track save state
  const [saveStatus, setSaveStatus] = useState(''); // To display save status

  useEffect(() => {
    setQuestions(content.questions || []);
  }, [content.questions]);

  const handleQuestionChange = (index, newQuestion) => {
    const updatedQuestions = questions.map((question, i) =>
      i === index ? newQuestion : question
    );
    setQuestions(updatedQuestions);
    onContentChange({ questions: updatedQuestions });
  };

  const handleOptionChange = (questionIndex, optionIndex, newOption) => {
    const updatedQuestions = questions.map((question, i) => {
      if (i === questionIndex) {
        const updatedOptions = question.options.map((option, j) =>
          j === optionIndex ? newOption : option
        );
        return { ...question, options: updatedOptions };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    onContentChange({ questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (questionIndex, correctAnswer) => {
    const updatedQuestions = questions.map((question, i) =>
      i === questionIndex ? { ...question, correctAnswer } : question
    );
    setQuestions(updatedQuestions);
    onContentChange({ questions: updatedQuestions });
  };

  const addNewQuestion = () => {
    const newQuestion = { question: '', options: ['', '', '', ''], correctAnswer: '' };
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    onContentChange({ questions: updatedQuestions });
  };

  const saveQuiz = async () => {
    setSaving(true);
    try {
      const response = await axios.post('/api/quizzes', { questions });
      setSaveStatus('Quiz saved successfully!');
    } catch (error) {
      setSaveStatus('Error saving quiz. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="quiz-template">
      <h3>Quiz Template</h3>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="quiz-question">
          <input
            type="text"
            placeholder="Enter question"
            value={question.question}
            onChange={(e) =>
              handleQuestionChange(questionIndex, { ...question, question: e.target.value })
            }
            className="question-input"
          />
          <div className="quiz-options">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                  className="option-input"
                />
              </div>
            ))}
          </div>
          <select
            value={question.correctAnswer}
            onChange={(e) => handleCorrectAnswerChange(questionIndex, e.target.value)}
            className="correct-answer-select"
          >
            <option value="">Select Correct Answer</option>
            {question.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={addNewQuestion} className="add-question-button">
        Add Question
      </button>

      <button onClick={saveQuiz} className="save-quiz-button" disabled={saving}>
        {saving ? 'Saving...' : 'Save Quiz'}
      </button>
      {saveStatus && <p className="save-status">{saveStatus}</p>}
    </div>
  );
};

export default QuizTemplate;
