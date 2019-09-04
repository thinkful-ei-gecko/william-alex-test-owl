import React from 'react';
import './App.css';
import List from './List';
import Stage from './Stage';
import Chat from './Chat';
import STORE from './Store';

function App(props) {
  // console.log(props);
  const participantArray = props.participants;
  const chatArray = props.chatEvents;
  // console.log(array);
  const sortedArray = participantArray.sort((a,b) => b.inSession - a.inSession);
  const onStageArray = participantArray.filter(person => person.onStage);
  const find = participantArray.find(id => chatArray.id === id)
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
      {<Chat 

      
      />}
    </div>
  );
}

export default App;