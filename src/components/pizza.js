import React from 'react';
import { Container } from "semantic-ui-react"

const Pizza = props => {

    const {user} = props

    return (
      <Container>
        <h4>Order Summery</h4>
        <div>
                <p>Name:{user.name}</p>
                <p>Size: {user.size}</p>
                <p>Sauce: {user.sauce}</p>
                <p>Toppings:</p>
                {
                    user.toppings.map(item => {
                        return (
                            <p key={item}>{item}</p>
                        )
                    })
                }
                <p>Gluten Free: {user.choice}</p>
                <p>Instruction: {user.instruction}</p>
        </div>
      </Container>
    )
}

export default Pizza