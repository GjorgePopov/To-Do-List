import React, {useState} from 'react'





function Todo() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    const HandleChange = e => {
        e.preventDefault()
    
        setInput(e.currentTarget.value);
    };

    
    const addTodo= () => {
        const id = data.length + 1;
        setData((prev) => [
          ...prev,
          {
            id: id,
            task: input,
            complete: false,
          },
        ]);
        setInput("");
        console.log(input)
      };

    
    
      return (
        <div>
            <form className='todo-form' >
                <input 
                    type='text' 
                    placeholder='Add a todo'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={HandleChange}
                />
    
                <button className='todo-button' onClick={addTodo}>add To Do</button>
                
            </form>

            {data.map((Todo) => {
                <div> 
                    <ul>
                        <li>
                            {Todo.task}
                        </li>
                    </ul>
                </div>
            })}
        </div>
      )
    }
    
    

export default Todo



