import React, {useState} from "react";
import { Container, Button } from "semantic-ui-react"
import styled from 'styled-components'
import pizzaImg from "./Pizza.jpg"
import { Link, Route } from 'react-router-dom'
import Form from './components/form'
import Pizza from './components/pizza'


const StyledHeader = styled.header`

.header--top{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.header--hero{
  background-image: url(${pizzaImg});
  background-size: cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color:#fffffe;
    text-align:center;
  }
}

`

const URL = "https://reqres.in/api/users"

const initialValue = {
  name: '',
  size: '',
  sauce: '',
  toppings: [],
  choice: false,
  instruction: ''
}

const initialFormErrors = {
  name:'',
  size: "",
  sauce: "",
  toppings: '',
  choice: '',
  instruction: '',
}

//const initialDisabled = true
const initialUser = {}

const App = () => {

  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialValue)
  //const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

   const update = (name, value) => {
    // yup
    //   .reach(formSchema, name)
    //   .validate(value)
    //   .then((valid) => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: "",
    //     })
    //   })
    //   .catch((err) => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0],
    //     })
    //   })

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
      toppings: formValues.toppings,
      choice: formValues.choice,
      instruction: formValues.instruction,
    }

    setUser([newUser])
    setFormValues(initialValue)
  }

  const toppings = []

  const updateTopping = (name) => {

    toppings.push(name)

    setFormValues({
      ...formValues,
      toppings: toppings,}
    )
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
            <Link to={"/form"}>
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
};
export default App;
