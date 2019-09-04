import React from 'react';
import participants from './Participants';

const List = function (props) {
    return (
        <div>
            <ul>
                <li>
                    <h2>{props.name}</h2>
                    <img src={props.avatar} alt='avatar'/>
                    <span>
                        {props.inSession ? 'In session' : 'Left session'}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default List;