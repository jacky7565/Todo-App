import "./todo.css";
import { UseMyContext } from "../TodoContext.jsx";
import { useState } from "react";

const Todo = () => {
  let myContext = UseMyContext();

  let [input, setInput] = useState("");
  let [checkEdit, setCheckEdit] = useState("");
  let [editVal, setEditVal] = useState(null);
  let { add, setAdd, addfun, deleteTodo, updateTodo } = myContext;

  // console.log(add);
  let submitTodo = () => {
    if (!input) {
      alert("Enter Value");
      return false;
    }
    let getTodoData = {
      dodoValue: input,
      completed: true,
    };
    addfun(getTodoData);
    setInput("");
  };

  let checkUpdateHandle = (_id, value) => {
    setCheckEdit(_id);
    setEditVal(value);
  };




  return (
    <div className="grocery-container">
      <h1>Todo App</h1>
      <div className="item-list">
        {add.map((val) => (
          <div key={val.id} className="item">
            {checkEdit === val.id ? (
              <input
                type="text"
                placeholder="Update something to your list"
                value={editVal}
                onClick={(e) => setEditVal(e.target.value)}
              />
            ) : (
              <span>{val.dodoValue}</span>
            )}
            <div className="action">
              <button className="delete-btn" onClick={() => deleteTodo(val.id)}>
                🗑
              </button>
              {checkEdit === val.id ? (
                <button
                  className="edit-btn"
                  onClick={() => updateHandler(val.id)}
                >
                  💾
                </button>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => checkUpdateHandle(val.id, val.dodoValue)}
                >
                  ✏️
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add something to your list"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitTodo} className="add-btn">
          Add
        </button>
      </div>
      <button className="clear-btn">Delete List</button>
    </div>
  );
};
export default Todo;
