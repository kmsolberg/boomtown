import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard/';
import './style.css';


// Masonry

const ItemCardList = ({ itemsData }) => (
    <Masonry
        className={'itemCardListWrapper'}
        elementType={'ul'}
    >
        { itemsData && itemsData.map((item) => (
            <ItemCard itemData={item} key={item.itemid} />
        )) }
    </Masonry>
);

ItemCardList.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemCardList;
