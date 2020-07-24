import * as yup from "yup"

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),

  size: yup.string(),

  sauce: yup.string(),

  toppings: yup.string(),

  choice: yup.string(),

  instruction: yup.string(),
})

export default formSchema
