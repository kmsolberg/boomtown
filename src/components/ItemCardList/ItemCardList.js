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
            <ItemCard itemData={item} key={item.id} />
        )) }
    </Masonry>
);

ItemCardList.propTypes = {
    itemsData: PropTypes.array.isRequired
};

export default ItemCardList;
