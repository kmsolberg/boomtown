import React from 'react';
import './style.css';

import grumpyCat from '../../images/grumpy-cat.svg';

const NotFound = () => (
    <div className="not-found">
        <img src={grumpyCat} alt="404-icon" />
        <h1>No.</h1>
    </div>
);

export default NotFound;
