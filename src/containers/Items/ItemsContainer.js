import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from '../../components/Loader/';
import Items from './Items';

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

        if (this.props.data.loading) return <Loader />;

        return (
            <Items
                itemsData={filterItemsData}
            />
        );
    }
}

ItemsContainer.propTypes = {
    filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
};

function mapStateToProps(state) {
    return {
        filterTags: state.items.filterTags
    };
}

const getItems = gql`
    query fetchItems {
        items {
            id
            imageurl
            itemowner{
                fullname
                email
                id
            }
            createdon
            title
            tags {
                title
            }
            description
            available
            borrower {
                fullname
            }
        }
    }
`;

const ItemsWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsWithData);
