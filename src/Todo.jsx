import { useState } from "react";

export const Todo = () =>{
  const [todoText , setTodoText] = useState("");
  const [inConpleatTodos, sertInConpleatTodos] = useState(["Todoデス1","Todoデス2"]);
  const [conpleatTodos, sertConpleatTodos] = useState(["Todoでした1","Todoでした"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...inConpleatTodos,todoText];
    sertInConpleatTodos(newTodos);
    setTodoText("");
  }
  return(
    <>
    <div className="input-area">
      <input placeholder="TODO" value={todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {inConpleatTodos.map( (todo) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    <div className="complete-area">
    <p className="title">完了のTODO</p>
      <ul>
        {conpleatTodos.map((todo) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
