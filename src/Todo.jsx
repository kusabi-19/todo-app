import { useState } from "react";
import { InputTodo } from "./conponents/InputTodo";
import { InConpleatTodos } from "./conponents/InCompleateTodo";
import { ConpleatTodos } from "./conponents/CompleateTodo";

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
  const onClickDeleat = (index) => {
    const newTodos = [...inConpleatTodos];
    newTodos.splice(index , 1);
    sertInConpleatTodos(newTodos);
  }
  const onClickCompleat = (index) => {
    const newTodos = [...inConpleatTodos];
    const newCompleatTodos = [...conpleatTodos , newTodos[index]];
    sertConpleatTodos(newCompleatTodos);
    newTodos.splice(index , 1);
    sertInConpleatTodos(newTodos);
  }
  const onClickInCompleat = (index) => {
    const newTodos = [...conpleatTodos];
    const newInCompleatTodos = [...inConpleatTodos , newTodos[index]];
    sertInConpleatTodos(newInCompleatTodos);
    newTodos.splice(index , 1);
    sertConpleatTodos(newTodos);
  }
  const disabledMax = inConpleatTodos.length >=5
  return(
    <>
    <InputTodo 
      todoText={todoText} 
      onChange={onChangeTodoText} 
      onClick={onClickAdd}
      disabled={disabledMax}
    />
    {disabledMax >= 5 && (
      <p>消化しなさーいこらー</p>
    )}

    <InConpleatTodos
      todos={inConpleatTodos}
      onClickDeleat={onClickDeleat}
      onClickCompleat = {onClickCompleat}
    />
    <ConpleatTodos
      todos={conpleatTodos}
      onClickInCompleat={onClickInCompleat}
    />
    </>
  );
};
