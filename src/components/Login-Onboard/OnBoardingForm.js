import React, { useState, useEffect } from "react";
import * as yup from 'yup';

const OnBoardingForm = (props) => {
  const [userForm, setUserForm] = useState({ 
    name: "", 
    email: "" 
  });

const [errors, setErrors] = useState({
  name: "", 
    email: ""
})

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email("must be a valid email address").required()
})

  useEffect(() => {
    formSchema.isValid(userForm).then(valid => {
      console.log('valid?',valid)
    })
  }, [userForm])
  const handleChanges = (event) => {
    console.log("handle change!", event.target.value);
    const newState = { ...userForm, [event.target.name]: event.target.value };
    setUserForm(newState);
  };

  const submitForm = (event) => {
    event.preventDefault();
    //props.addUser(userForm)
    console.log("form submitted!")
    setUserForm({ name: "", email: "" })
  };

  console.log("userForm:", userForm);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">
        Name"
        <input
          id="name"
          name="name"
          type="text"
          placeholder="enter name"
          onChange={handleChanges}
        />
      </label>

      <label htmlFor="email">
        email:
        <input
          id="email"
          name="email"
          type="email"
          placeholder="enter email"
          onChange={handleChanges}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnBoardingForm;
