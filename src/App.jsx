import React, { useState } from 'react';

function App() {
  const [script, setScript] = useState('');
  const [formattedScript, setFormattedScript] = useState('');

  // Function to handle writing in the textarea
  const handleScriptChange = (e) => {
    setScript(e.target.value);
  };

  // Basic formatting options
  const formatScript = () => {
    const formatted = script
      .replace(/\n/g, '<br/>')
      .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    setFormattedScript(formatted);
  };

  return (
    <>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">JSX Script Writer</h2>
      
      <textarea
        value={script}
        onChange={handleScriptChange}
        placeholder="Start writing your script..."
        rows={10}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <div className="mt-4 flex space-x-4">
        <button
          onClick={formatScript}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Format Script
        </button>

        <button
          onClick={() => alert('Script saved!')}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
        >
          Save Script
        </button>
      </div>
      
      <h3 className="text-xl font-semibold mt-6">Formatted Script:</h3>
      <div
        className="p-4 mt-2 bg-white shadow-md border border-gray-300 rounded-lg"
        dangerouslySetInnerHTML={{ __html: formattedScript }}
      />
    </div>
    </>
  )
}

export default App
