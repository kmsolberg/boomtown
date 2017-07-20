import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/';
import Items from './Items';
import { fetchItems } from '../../redux/modules/items';

class ItemsContainer extends Component {

    updateFilterItems() {
        const items = this.props.data.items;
        const filterTags = this.props.filterTags;

        if (filterTags.length) {
            return items.filter(item => item.tags.find(tag => filterTags.includes(tag)));
        }
        return items;
    }

    render() {
        const { filterTags } = this.props;
        const filterItemsData = this.updateFilterItems(filterTags);

        return (
            <Items
                itemsData={filterItemsData}
            />
        );
    }
}

ItemsContainer.propTypes = {
    filterTags: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps(state) {
    return {
        // loading: state.items.loading,
        filterTags: state.items.filterTags
    };
}

const getItems = gql`
    query fetchItems {
        items {
            imageUrl
            itemOwner{
                fullName
                email
            }
            createdOn
            title
            tags
            description
        }
    }
`;

const ItemsWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsWithData);
