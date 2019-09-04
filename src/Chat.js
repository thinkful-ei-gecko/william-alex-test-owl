import React from 'react';


const Chat = function(props) {
    if (props.type === 'message') {
        return (
            <div>
                <img src={props.avatar} alt='avatar' />
                <span>{props.name}</span>
                <span>{props.timestamp}</span>
                <p>{props.message}</p>
            </div>
        )}
    //     } else {
    //         return (
    //             <div>
    //                 <span>{props.name} </span>
    //                 <span>gave a {props.type}</span>
    //             </div>)
    // }
}

export default Chat;