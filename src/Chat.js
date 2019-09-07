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
    if (props.type === 'thumbs-up') {
        return (
            <div>
                <span>{props.name} gave a thumbs-up</span>
            </div>
        )
    }
    if (props.type === 'thumbs-down') {
        return (
            <div>
                <span>{props.name} gave a thumbs-down</span>
            </div>
        )
    }
    if (props.type === 'raise-hand') {
        return (
            <div>
                <span>{props.name} raised their hand</span>
            </div>
        )
    }
    if (props.type === 'clap') {
        return (
            <div>
                <span>{props.name} clapped their hand</span>
            </div>
        )
    }
    if (props.type === 'join') {
        return (
            <div>
                <span>{props.name} joined</span>
            </div>
        )
    }
    if (props.type === 'left') {
        return (
            <div>
                <span>{props.name} left</span>
            </div>
        )
    }
    if (props.type === 'join-stage') {
        return (
            <div>
                <span>{props.name} joined the stage</span>
            </div>
        )
    }
    if (props.type === 'leave-stage') {
        return (
            <div>
                <span>{props.name} left the stage</span>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Chat;