import React from 'react';
import Chat from './Chat';

const ChatList = function(props) {
    const chatArray = props.chatEvents.map(chatEvent => {
        let timestamp = new Date(chatEvent.timestamp).toLocaleTimeString();
        // console.log(timestamp);
        for (let i = 0; props.participants.length; i++) {
            if(props.participants[i].id === chatEvent.participantId) {
                return (
                    <Chat 
                        avatar={props.participants[i].avatar}
                        name={props.participants[i].name}
                        timestamp={timestamp}
                        message={chatEvent.message}
                        type={chatEvent.type}
                    />
                    )
                }
            }
        }
    )
    return chatArray;
}

export default ChatList;