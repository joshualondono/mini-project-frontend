import React, { Fragment } from 'react';
import { Heading } from './Heading/Heading';
import { Propertylist } from './Data/Propertylist';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                    <Heading />
                    <Propertylist />
                </div>
        </Fragment>
    )
}