import React, { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);

  const clickhandler = (e) => {
    setItems([
      ...items,
      {
        id: items.length,
        value: document.getElementById("input").value,
        dis: true
      }
    ]);

    document.getElementById("input").value = "";
  };
  const handleDelete = (idi) => {
    // console.log(items[idi].value);

    setItems(items.filter((item) => item.id !== idi));
  };
  return (
    <div>
      <input id="input" autoFocus />{" "}
      <button
        onClick={() => {
          clickhandler();
        }}
      >
        add items
      </button>
      <button onClick={() => setItems([])}>reset</button>
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <li>{item.value}</li>
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
