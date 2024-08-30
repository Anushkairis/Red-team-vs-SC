import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [mode, setMode] = useState('javascript');
  const [result, setResult] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const executeCode = async () => {
    try {
      const response = await fetch('http://localhost:3000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language: mode }),
      });
      const data = await response.json();
      setResult(data.output);
    } catch (error) {
      setResult('Error executing code');
    }
  };

  return (
    <div>
      <select onChange={handleModeChange} value={mode}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        {/* Add more languages as needed */}
      </select>
      <AceEditor
        mode={mode}
        theme="monokai"
        name="code_editor"
        value={code}
        onChange={handleCodeChange}
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="400px"
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
      />
      <button onClick={executeCode}>Run Code</button>
      <pre>{result}</pre>
    </div>
  );
};

export default CodeEditor;
