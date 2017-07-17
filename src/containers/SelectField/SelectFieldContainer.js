import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectFieldTags from './SelectField';
import { fetchCategories } from '../../redux/modules/items';

class SelectFieldContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    handleChange(event) {
        console.log(this.event.target.value);
    }

    render() {
        return (
            <SelectFieldTags
                itemTags={this.props.itemTags}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        itemTags: state.items.itemTags
    };
}

export default connect(mapStateToProps)(SelectFieldContainer);
