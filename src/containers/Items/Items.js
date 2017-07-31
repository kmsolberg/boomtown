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
        items: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
};

export default Items;
