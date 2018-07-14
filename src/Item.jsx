import React from 'react';

export default (props) => {
    return ( 
        <li key={props.index}>
            {props.user.id}: <a href={props.url}>{props.title}</a>
        </li>
    );
}