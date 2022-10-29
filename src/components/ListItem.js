const ListItem = ({ singleTask, setStatus, toggleDone, id, setId, state, dispatch }) => {
  
  return (
    <>
      <li className="listItem">
        <span className="leftBoxSide">
          <div>{`Task: ${singleTask.text}`}</div>
          <div>{`To suffer until: ${singleTask.date}`}</div>
        </span>
        <span className="rightBoxSide">
          <button className="close"
            onClick={() => {
              const newList = state.filter((currTask) => currTask !== singleTask);
              dispatch({
                type: 'taskDelete', newList:newList              
              });
              localStorage.setItem('tasks', JSON.stringify(newList));
            }
          }>X</button>
          <span>Is done?    
            <span> </span>
            <input id="checked"
              type="checkbox"
              checked={singleTask.status}
              onChange={() => {
                toggleDone(singleTask.id)
              }}
            />
          </span>
        </span>
      </li>
    </>
  )
};

export default ListItem;
