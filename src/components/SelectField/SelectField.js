import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const selectField = ({ filterTags, dispatch, onChangeAction }) => {
    const tags = ['Electronics', 'Household Items', 'Musical Instruments', 'Physical Media', 'Recreational Equipment', 'Sporting Goods', 'Tools'];

    return (
        <SelectField
            multiple
            hintText="Filter by tag"
            value={filterTags}
            onChange={(event, index, values) => dispatch(onChangeAction(values))}
        >
            {tags.map((tag) => (
                <MenuItem
                    key={tag}
                    insetChildren
                    checked={filterTags && filterTags.includes(tag)}
                    primaryText={tag}
                    value={tag}
                />
            ))}
        </SelectField>
    );
};

export default selectField;
