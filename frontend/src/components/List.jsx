import React, { useState, useEffect } from 'react';
function List(){
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3500/list")
        .then(res => res.json())
        .then(data => {
            setList(data);
        })
    }, []);
    return <div>
        <h1>List</h1>
        <ul>
            {list.map((item, index) => {
                return <li key={index}>{item.name} - {item.email} - {item.text}</li>
            })}
        </ul>
    </div>
}

export default List;