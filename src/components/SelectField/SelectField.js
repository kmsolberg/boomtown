import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const selectArea = () => (
    <SelectField
        multiple={true}
        hintText="Filter by tag"
    >
        <MenuItem value={1} primaryText="Category1" />
    </SelectField>
);

export default selectArea;
