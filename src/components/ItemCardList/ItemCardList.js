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
    itemsData: PropTypes.shape({
        title: PropTypes.string,
        available: PropTypes.bool,
        imageurl: PropTypes.string,
        itemowner: PropTypes.shape({
            fullname: PropTypes.string,
            email: PropTypes.string
        }),
        createdon: PropTypes.string,
        tags: PropTypes.array
    }).isRequired
};

export default ItemCardList;
