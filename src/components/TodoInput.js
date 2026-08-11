import React, { useState } from "react";

function TodoInput({ addTodo }) {

  const [text, setText] = useState("");

  function handleAdd() {

    addTodo(text);

    setText("");

  }

  return (

    <div className="todo-input">

      <input
        type="text"
        value={text}
        placeholder="Enter Todo..."
        onChange={function(e){
          setText(e.target.value);
        }}
      />

      <button onClick={handleAdd}>
        Add
      </button>

    </div>

  );

}

export default TodoInput;