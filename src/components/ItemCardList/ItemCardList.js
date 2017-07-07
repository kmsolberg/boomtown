import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from '../ItemCard/';


// Masonry

const ItemCardList = ({ itemsData }) => (
    <ul>
        { itemsData.map((item) => (
            <ItemCard itemData={item} key={item.id} />
        )) }
    </ul>
);

ItemCardList.propTypes = {
    itemsData: PropTypes.shape({
    }).isRequired
};

export default ItemCardList;
