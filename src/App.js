import React from 'react';
import './App.css';
import List from './List';
import Stage from './Stage';

function App(props) {
  // console.log(props);
  const array = props.participants;
  // console.log(array);
  const sortedArray = array.sort((a,b) => b.inSession - a.inSession);
  const onStageArray = array.filter(person => person.onStage);
  return (
    <div className="App">
      {sortedArray.map(person => (
        <List
          key={person.id}
          name={person.name}
          avatar={person.avatar}
          inSession={person.inSession}
        />
      ))}
      {onStageArray.map(person => (
        <Stage
          key={person.id}
          name={person.name}
          avatar={person.avatar}
        />
      ))}
    </div>
  );
}

export default App;