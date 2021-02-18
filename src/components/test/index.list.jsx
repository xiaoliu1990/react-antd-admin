import React, { useRef, useReducer } from "react"
import { Button } from 'antd';
function ComIndexList({ count, value }) {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case 'remove':
        return state.filter((_, index) => index != action.index);
      case 'clear':
        return state.splice(0, state.length)
      default:
        return state;
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  }

  return (
    <div>
      {count}：
      {value}
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch({ type: 'remove', index })} > X </button>
            </li>
          ))}
          <button onClick={() => dispatch({ type: 'clear' })} > 空 </button>
        </ul>
      </div>
    </div>
  )
}
export default ComIndexList;