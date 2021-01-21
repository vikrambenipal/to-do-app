import React from 'react'

export const List = (props) => {

    const { list } = props;

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.task}</li>
                ))}
            </ul>
        </div>
    )
}

export default List; 
