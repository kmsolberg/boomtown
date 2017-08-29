import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ItemCard from '../ItemCard/';
import './style.css';


// Masonry

const ItemCardList = ({ itemsData, authenticated, location }) => (
    <Masonry
        className={'itemCardListWrapper'}
        elementType={'ul'}
    >
        {itemsData && itemsData.map((item) => (
            <ItemCard
                itemData={item}
                key={item.id}
                authenticated={authenticated}
                location={location}
            />
        ))}
    </Masonry>
);

ItemCardList.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.shape({
        _typename: PropTypes.string,
        borrower: PropTypes.shape({
            _typename: PropTypes.string,
            fullname: PropTypes.string,
            id: PropTypes.string
        }),
        createdon: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        imageurl: PropTypes.string,
        itemowner: PropTypes.shape({
            _typename: PropTypes.string,
            email: PropTypes.string,
            fullname: PropTypes.string,
            id: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(PropTypes.shape({
            _typename: PropTypes.string,
            title: PropTypes.string
        })),
        title: PropTypes.string
    })).isRequired,
};

export default ItemCardList;
