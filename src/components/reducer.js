const reducer = (state, action) => {
  switch (action.type) {
    case 'creatTaskList': {
      const newList = [...state, { id: action.id, text: action.inputToDo, date: action.date, status: action.status }];
      console.log('newList', newList);
      console.log('state before', state);
      return newList;
    }
    case 'taskStorage': {
      return action.storageTask;
    }
    case 'taskToggleDone': {
      return action.newList;
    }
    case 'taskDelete': {
      return action.newList;
    }
    default:
      throw new Error('Unknown type of action' + action.type);
  }
}

export default reducer;