
import { useReducer, useState } from "react";

const initialState = [];

const todoReducer = (state, action) => {
    console.log(state,action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map(todo =>
        
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
     
  }
  
  
};

export default function TODO() {
  const [state, dispatch] = useReducer(todoReducer,[]);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (task.trim() === "") return;
    if (editingId) {
      dispatch({ type: "EDIT_TODO", payload: { id: editingId, text: task } });
      setEditingId(null);
    } else {
      dispatch({ type: "ADD_TODO", payload: task });
    }
    setTask("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center">TODO TASK</h2>
      <div className="flex gap-3 mt-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-3 w-full"
        />
        <button onClick={handleSubmit} className="bg-pink-500 text-white p-2">
          {editingId ? "Edit" : "Add"}
        </button>
      </div>
      <ul className="mt-3">
        {state.map(todo => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span
              className={todo.completed ? "line-through" : ""}
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            >
              {todo.text}
            </span>
            <div>
              <button
                className="text-yellow-500 mx-2"
                onClick={() => { setTask(todo.text); setEditingId(todo.id); }}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

