export const InConpleatTodos = (props) => {
  const {todos,onClickDeleat,onClickCompleat} = props
  return(
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map( (todo , index ) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickCompleat(index)}>完了</button>
              <button onClick={() => onClickDeleat(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};