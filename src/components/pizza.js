import React from 'react';

const Pizza = props => {

    const {user} = props

    return (
        <div>
            <h4>Order Summery</h4>
            <div>
                <p>Name:</p>
                {user.name}
            </div>
        </div>
    )
}

export default Pizza