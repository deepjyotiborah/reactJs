import React from 'react';


const withClasses = (WrappeComponent, className) => {
    return props => (
        <div className={className}>
            <WrappeComponent {...props} />
        </div>
    );
} 

export default withClasses;