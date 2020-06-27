// React imports
import React from 'react';

// Custom imports
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>{props.userName}</p>
            <p>text 2</p>
        </div>
    )
};

export default userOutput;