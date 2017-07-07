import React, { Component } from 'react';
import Loader from '../../components/Loader/';
import Items from './Items';
import PropTypes from 'prop-types';

class ItemsContainer extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            itemsData: []
        };
    }

    componentDidMount() {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            const itemsWithOwners = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                item.itemOwner = itemOwner[0];
                return item;
            });

            this.setState({
                itemsData: itemsWithOwners,
                loading: false
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        if (this.state.loading) return <Loader />;
        return (
            <div>
                <Items
                    itemsData={this.state.itemsData}
                />
            </div>
        );
    }
}

// Items.propTypes = {
//     itemsData: propTypes.shape ({

//     })
// }

export default ItemsContainer;
