import React from 'react';

export default props => {
    return (
        props.errors.map((error, i) => (
            <small key={i} className="text-err">
                {error}
            </small>
        ))
    );
}