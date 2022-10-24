import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>This is the terms and condition component</h2>
            <p>Go back to <Link to='/register'>Registration</Link> </p>
        </div>
    );
};

export default TermsAndConditions;