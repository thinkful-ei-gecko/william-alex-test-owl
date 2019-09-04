import React from 'react';

//name & avatar & onStage

const Stage = function(props){
  return (
    <div className="stage flexbox">
      <img src={props.avatar} alt="avatar" />
      <h2>{props.name}</h2>
    </div>
  )
};

export default Stage;