import React from 'react';
import PropTypes from 'prop-types';
import ItemCardList from '../../components/ItemCardList/';

import './style.css';

const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

Items.propTypes = {
    itemsData: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        items: PropTypes.shape({
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
    }).isRequired
};

export default Items;
