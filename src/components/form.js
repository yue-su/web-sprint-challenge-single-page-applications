import React from 'react';
import { Container, Button, Input, Checkbox } from "semantic-ui-react"

const Form = props => {

    const { values, submit, update, errors, updateTopping } = props
    
    const updateHandler = event => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }
    
    const submitHandler = event => {
        event.preventDefault()
        submit()
    }

    const checkboxHandler = event => {
        const { name} = event.target
        updateTopping(name) 
    }


    return (
      <section>
        <Container>
          <h2>Build Your Own Pizza</h2>
          <form onSubmit={submitHandler}>
            {/*----------------------------------*/}
            <lable>
              <h3>Name</h3>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={updateHandler}
              ></Input>
            </lable>
            {/*----------------------------------*/}
            <label>
              <h3>Choice of Size</h3>
              <select
                name="size"
                placeholder="select your size"
                onChange={updateHandler}
                value={values.size}
              >
                <option value="">- Select a Size -</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="15">15</option>
                <option value="18">18</option>
                        </select>
                        
            </label>
            {/*----------------------------------*/}
            <div className="form--sauce">
              <h3>Choice of Sauce</h3>
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="original"
                  checked={values.sauce === "original"}
                  onChange={updateHandler}
                ></input>{" "}
                Original Red
              </label>
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="garlic"
                  checked={values.sauce === "garlic"}
                  onChange={updateHandler}
                ></input>{" "}
                Garlic Ranch
              </label>{" "}
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="BBQ"
                  checked={values.sauce === "BBQ"}
                  onChange={updateHandler}
                ></input>{" "}
                BBQ
              </label>{" "}
              <label>
                <input
                  type="radio"
                  name="sauce"
                  value="spinach"
                  checked={values.sauce === "spinach"}
                  onChange={updateHandler}
                ></input>{" "}
                Spinach Alfredo
              </label>
            </div>
            {/*----------------------------------*/}
            <div className="form--toppings">
              <h3>Add Toppings</h3>
              <label>
                Peperoni
                <input
                  type="checkbox"
                  name="Peperoni"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Black Olives
                <input
                  type="checkbox"
                  name="Black Olives"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Canadian Bacon
                <input
                  type="checkbox"
                  name="Canadian Bacon"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Green Pepper
                <input
                  type="checkbox"
                  name="Green Pepper"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Pineapple
                <input
                  type="checkbox"
                  name="Pineapple"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Three Cheese
                <input
                  type="checkbox"
                  name="Three Cheese"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Extra Cheese
                <input
                  type="checkbox"
                  name="Extra Cheese"
                  onChange={checkboxHandler}
                ></input>
              </label>
              <label>
                Diced Tomatos
                <input
                  type="checkbox"
                  name="Diced Tomatos"
                  onChange={checkboxHandler}
                ></input>
              </label>
            </div>
            {/*----------------------------------*/}
            <label>
              <h3>Choice of Substitue</h3>
              <Checkbox
                type="checkbox"
                name="choice"
                onChange={updateHandler}
                className="checkbox"
                checked={values.choice}
                value="choice"
              />
              I want gluten free.
            </label>
            {/*----------------------------------*/}
            <label>
              <h3>Special Instructions</h3>
              <Input
                name="instruction"
                type="text"
                placeholder="Instructions"
                value={values.instruction}
                onChange={updateHandler}
              ></Input>
            </label>
            <h3>Order placement</h3>
            <Button>Add to Order</Button>
          </form>
        </Container>
      </section>
    )
}

export default Form