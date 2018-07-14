import React from 'react';
import Item from './Item';

export default (props) => {
    const list = props.items.map((item, index) => {
        return <Item {...item} index={index} />
    });
    return (
        <React.Fragment>
            <ul>
                {list}
            </ul>
        </React.Fragment>
    );
};
