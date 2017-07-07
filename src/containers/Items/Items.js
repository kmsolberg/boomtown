import React from 'react';
import ItemCardList from '../../components/ItemCardList/';

import './style.css';

const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

export default Items;
