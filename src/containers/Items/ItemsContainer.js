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

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <Items
                itemsData={this.props.itemsData}
            />
        );
    }
}

ItemsContainer.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData
    };
}

export default connect(mapStateToProps)(ItemsContainer);
