import React from 'react';
import ItemCardList from '../../components/ItemCardList/';

import './style.css';

const Items = ({ itemsData }) => (
    <div>
        <ItemCardList itemsData={itemsData} />
    </div>
);

export default Items;
