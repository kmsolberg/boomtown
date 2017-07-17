import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const selectField = ({ itemTags }) => (
    <div>
        <SelectField
            multiple
            hintText="Filter by tag"
            value={this.itemTags}
            onChange={this.handleChange}
        >
            <MenuItem
                key="1"
                value={itemTags}
                primaryText="Electronics"
            />
            <MenuItem
                key="2"
                value={itemTags}
                primaryText="Household Items"
            />
            <MenuItem
                key="3"
                value={itemTags}
                primaryText="Musical Instruments"
            />
            <MenuItem
                key="4"
                value={itemTags}
                primaryText="Physical Media"
            />
            <MenuItem
                key="5"
                value={itemTags}
                primaryText="Recreational Equipment"
            />
            <MenuItem
                key="6"
                value={itemTags}
                primaryText="Sporting Goods"
            />
            <MenuItem
                key="7"
                value={itemTags}
                primaryText="Tools"
            />
        </SelectField>
    </div>
);

export default selectField;
