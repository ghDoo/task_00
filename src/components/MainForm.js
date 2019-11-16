
import React, { useState } from 'react';

const MainForm = (props) => {

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={event => props.onSubmitText(event, text)}>
      <input type="text" name="text" value={text} onChange={handleChange} />
      <button>Click Me</button>
    </form>
  );
};

export default MainForm;