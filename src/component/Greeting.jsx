import React from 'react'

const Greetings = props => {

    const {name} = props;

    return (
        <>
            <h1 className="display-1 mid-navy">
                Hello, <b className="name">{name}</b>! Welcome to Nik Brennan's lab 1.
            </h1>
        </>
    )
}

export default Greetings;
