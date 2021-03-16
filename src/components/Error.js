import React from 'react';

const Error = (props) => {
    return (
        <p className="alert alert-danger error">{props.mensaje}</p>
    )
};

export default Error;