import React, { useState , useMemo } from 'react';

const MemoCache2 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const result = useMemo(()=> calSum(count),[count]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
  
    return (
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Sum Calculation</h2>
          {result}
        </div>
      </div>
    );
  };
  
  const calSum = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 99999; i++) {
      num += 1;
    }
    return num;
  };
  
  export default MemoCache2;