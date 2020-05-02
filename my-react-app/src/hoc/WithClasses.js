import React from 'react';


const withClasses = (WrappeComponent, className) => {
    return props => (
        <div className={className}>
            <WrappeComponent />
        </div>
    );
} 

export default withClasses;