export const ConpleatTodos = (props) => {
  const {todos,onClickInCompleat} = props
  return(
    <div className="complete-area">
    <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo , index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickInCompleat(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};