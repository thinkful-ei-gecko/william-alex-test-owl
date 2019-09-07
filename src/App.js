import React from 'react';
import './App.css';
import List from './List';
import Stage from './Stage';
import ChatList from './ChatList';

function App(props) {
  // console.log(props);
  const participantArray = props.participants;
  // const chatArray = props.chatEvents;
  // console.log(array);
  const sortedArray = participantArray.sort((a,b) => b.inSession - a.inSession);
  const onStageArray = participantArray.filter(person => person.onStage);
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
      <ChatList 
        chatEvents={props.chatEvents}
        participants={props.participants}
      />
    </div>
  );
}

export default App;