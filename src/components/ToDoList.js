import { useEffect, useReducer, useState } from 'react';
import { FilterDone, FilterUndone } from './Filter';
import reducer from './reducer';

// USEREDUCE //

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'creatTaskList': {
//       const newList = [...state, { id: action.id, text: action.inputToDo, date: action.date, status: action.status }];
//       console.log('newList', newList);
//       console.log('state before', state);
//       return newList;
//     }
//     case 'taskStorage': {
//       return action.storageTask;
//     }
//     case 'taskToggleDone': {
//       return action.newList;
//     }
//     case 'taskDelete': {
//       return action.newList;
//     }
//     default:
//       throw new Error('Unknown type of action' + action.type);
//   }
// }

const ToDolist = () => {
  // useState() variables
  const [inputToDo, setInputToDo] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState(0);

  // useReduce() variables
  const initialTask = [];
  const [state, dispatch] = useReducer(reducer, initialTask)
  const taskHandler = () => {
    const newId = id + 1;
    setId(newId);
    setInputToDo('');
    setDate('');
  }
  
  useEffect(() => {
    const storageTask = JSON.parse(localStorage.getItem('tasks'));
    const storageId = JSON.parse(localStorage.getItem('newId'));
    if (storageTask !== null && storageTask.length !== 0) {
      dispatch({
        type: 'taskStorage', storageTask:storageTask              
      });
    }
    if (storageId) {
      setId(storageId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
    localStorage.setItem('newId', id);
  }, [id, state])
  
  const toggleDone = (id) => {
    const newList = state.map(task => task.id === id ? { ...task, status: !task.status } : task);
    dispatch({
      type: 'taskToggleDone', newList:newList              
    });
    localStorage.setItem('tasks', JSON.stringify(newList));
  };

  return (
    <div>
      <form
        className='form'
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: 'creatTaskList',
            id:id,
            inputToDo:inputToDo,
            date: date,
          });
          taskHandler();
        }}
        >
        
        {/* INPUT TASK */}
        <input
          type="text"
          name="listItem"
          className="inputTask"
          id="listItem"
          placeholder="Write a new task"
          onChange={(e) => {
            setInputToDo(e.target.value
          )}} value={inputToDo}
        />
        
        {/* INPUT DATE */}
        <input
          type="date"
          className="inputDate"
          onChange={(event) => {
          setDate(event.target.value)
          }} value={date}
        />
        
        <button
          className='buttonAddTask'>
          Add Task
        </button> 
        
      </form>      
      <ul className='todoList'>
        <h2>ToDo-List</h2>
        <FilterUndone
        state={state}
        toggleDone={toggleDone}
        id={id}
        setId={setId}
        dispatch={dispatch}
        />
      </ul>

      <ul className='todoList'>
        <h2>Done-List</h2>
        <FilterDone
        state={state}
        toggleDone={toggleDone}
        id={id}
        setId={setId}
        dispatch={dispatch}
        />
      </ul>
    </div>
  );
}

export default ToDolist;

// const test = "FJM";
// console.log(test.codePointAt());

// const test2 = ['FJM'];
// const F = test2[0].codePointAt(0); // 70
// const J = test2[0].codePointAt(1); // 74
// const M = test2[0].codePointAt(2); // 77
// const sumFJM = F + J + M; // 221
// console.log(sumFJM); // Quersumme 5 

