import React, { useState } from "react"
import { Container, Button } from "semantic-ui-react"
import styled from "styled-components"
import pizzaImg from "./Pizza.jpg"
import { Link, Route } from "react-router-dom"
import Form from "./components/form"
import Pizza from "./components/pizza"
import formSchema from "../src/validation/formSchema"
import * as yup from "yup"

const StyledHeader = styled.header`
  .header--top {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }

  .header--hero {
    background-image: url(${pizzaImg});
    background-size: cover;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      color: #fffffe;
      text-align: center;
    }
  }
`

const initialValue = {
  name: "",
  size: "",
  sauce: "",
  toppings: {
    blackOlives: false,
    canadianBacon: false,
    greenPepper: false,
    pineapple: false,
  },
  choice: false,
  instruction: "",
}

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
  toppings: "",
  choice: "",
  instruction: "",
}

//const initialDisabled = true
const initialUser = {
  name: "",
  size: "",
  sauce: "",
  toppings: [],
  choice: false,
  instruction: "",
}

const App = () => {
  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialValue)
  //const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const update = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    const updatedValue = {
      ...formValues,
      [name]: value,
    }

    setFormValues(updatedValue)
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings).filter(
        (topping) => formValues.toppings[topping]
      ),
      choice: formValues.choice,
      instruction: formValues.instruction,
    }

    setUser(newUser)
    setFormValues(initialValue)
  }

  const updateTopping = (name, checked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked, // not an array
      },
    })
  }

  return (
    <>
      <StyledHeader>
        <Container className="header--top">
          <h2>LAMBDA EATS</h2>
          <div className="header--top--btn">
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
            <Link to={"/help"}>
              <Button>Help</Button>
            </Link>
          </div>
        </Container>
        <Container className="header--hero">
          <div>
            <h1>Your Favorite food, delivered while coding</h1>
            <Link to={"/"}>
              <Button>Pizza?</Button>
            </Link>
          </div>
        </Container>
      </StyledHeader>
      <Route exact path="/">
        <Form
          values={formValues}
          submit={submit}
          update={update}
          errors={formErrors}
          updateTopping={updateTopping}
        />

        <Pizza user={user} />
      </Route>
    </>
  )
}
export default App
