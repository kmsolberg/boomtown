import React from 'react';

import './style.css';

const Items = ({ itemsData }) => (
    <ul>
        { itemsData.map((item) => (
            <li key={item.id}>
                {item.title}
                {item.description}
            </li>
        )) }
    </ul>
);

export default Items;
