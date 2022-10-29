import ListItem from "./ListItem";
// import { useEffect, useState } from 'react';

const FilterUndone = ({state, dispatch, setStatus,  toggleDone, id, setId}) => {
  return (
    <div className="filter">
      {state.filter(obj => { return (!obj.status) }).map((obj) => (
      <ListItem
      state={state}
      dispatch={dispatch}
      singleTask={obj}
      setStatus={setStatus}
      toggleDone={toggleDone}
      id={id}
      setId={setId}
      key={id}
      />))}
    </div>
  );
}

const FilterDone = ({state, dispatch, setStatus,  toggleDone,
id, setId }) => {
  return (
    <div className="filter">
      {state.filter(obj => { return (obj.status) }).map((obj) => (
      <ListItem
      state={state}
      dispatch={dispatch}
      singleTask={obj}
      setStatus={setStatus}
      toggleDone={toggleDone}
      id={id}
      setId={setId}
      key={id}
    />))}
    </div>
  );
}

export {FilterDone, FilterUndone};