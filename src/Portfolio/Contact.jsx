import React, { useState } from 'react';

const TextAreaExample = () => {
  // State to manage the content of the textarea
  const [text, setText] = useState('');

  // Event handler to update the textarea content
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Textarea Example</h2>
      {/* Textarea element */}
      <textarea
        value={text}        // Set the value of the textarea to the state value
        onChange={handleChange} // Call handleChange function when the textarea content changes
        rows={4}            // Set the number of visible text lines
        cols={50}           // Set the width of the textarea in characters
        placeholder="Enter your text here..." // Placeholder text
      />
      {/* Displaying the content of the textarea */}
      <div>
        <h3>Content:</h3>
        <p>{text}</p>
      </div>
      <button className="btn btn-danger">Login</button>
    </div>
  );
};

export default TextAreaExample;
