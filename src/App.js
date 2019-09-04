import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  // console.log(props);
  const array = props.participants;
  // console.log(array);
  const sortedArray = array.sort((a,b) => b.inSession - a.inSession);
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
    </div>
  );
}

export default App;