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
            return items.filter(item => item.tags.map(tag => tag.title).find(title => filterTags.includes(title)));
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
                authenticated={this.props.authenticated}
            />
        );
    }
}

ItemsContainer.propTypes = {
    filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
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
        })),
    }).isRequired,
    authenticated: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        filterTags: state.items.filterTags,
        authenticated: state.auth.userLogin
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
            borrower {
                id
                fullname
            }
        }
    }
`;

const ItemsWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsWithData);
