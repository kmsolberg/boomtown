import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader/';
import Items from './Items';
import { fetchItems } from '../../redux/modules/items';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItems());
    }

    filterItems(filterTags) {
        const items = this.props.itemsData;

        if (filterTags.length) {
            return items.filter(item => item.tags.find(tag => filterTags.includes(tag)));
        }
        return items;
    }

    render() {
        const { filterTags } = this.props;
        const filterItemsData = this.filterItems(filterTags);

        if (this.props.loading) return <Loader />;

        return (
            <Items
                itemsData={filterItemsData}
            />
        );
    }
}

ItemsContainer.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    filterTags: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData,
        filterTags: state.items.filterTags
    };
}

export default connect(mapStateToProps)(ItemsContainer);
