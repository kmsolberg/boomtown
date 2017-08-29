import React from 'react';
import PropTypes from 'prop-types';
import ItemCardList from '../../components/ItemCardList/';

import './style.css';

const Items = ({ itemsData, authenticated }) => (
    <ItemCardList
        itemsData={itemsData}
        authenticated={authenticated}
    />
);

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.shape({
        items: PropTypes.shape({
            _typename: String.PropTypes,
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
                id: PropTypes.string
            }),
            tags: PropTypes.arrayOf(PropTypes.shape({
                _typename: PropTypes.string,
                title: PropTypes.string,
            })),
            title: PropTypes.string
        })
    })).isRequired,
    authenticated: PropTypes.string.isRequired,
};

export default Items;
