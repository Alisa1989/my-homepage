import axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from 'yup';

const OnBoardingForm = (props) => {
  const[post, setPost] = useState([])

  const [userForm, setUserForm] = useState({ 
    name: "", 
    email: "" 
  });

const [isButtonDisabled, setIsButtonDisabled] = useState(true)

const [errors, setErrors] = useState({
  name: "", 
    email: ""
})

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email("must be a valid email address").required()
})

const validateChange = e => {
  yup.reach(formSchema, e.target.name).validate(e.target.value).then(valid =>{
    setErrors({...errors, [e.target.name]: ""})
  }).catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
};

console.log("error state", errors);

  useEffect(() => {
    formSchema.isValid(userForm).then(valid => {
      console.log('valid?',valid);
      setIsButtonDisabled(!valid)
    })
  }, [userForm])

  const handleChanges = (event) => {
    console.log("handle change!", event.target.value);
    event.persist()
    
    const newState = { ...userForm, [event.target.name]: event.target.value };
    validateChange(event);
    setUserForm(newState);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios.post("https://reqres.in/api/users", userForm)
    .then(response => {
      setPost(response.data)
      setUserForm({ 
        name: "", 
        email: "" 
      });
    }).catch(err => console.log(err.response));
  };

  console.log("userForm:", userForm);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">
        Name"
        <input
          id="name"
          name="name"
          value={userForm.name}
          type="text"
          placeholder="enter name"
          onChange={handleChanges}
        />
        {errors.name.length > 0 ? <p className="error" style={{color:"red"}}>{errors.name}</p> : null}
      </label>

      <label htmlFor="email">
        email:
        <input
          id="email"
          name="email"
          value={userForm.email}
          type="email"
          placeholder="enter email"
          onChange={handleChanges}
        />
        {errors.email.length > 0 ? <p className="error" style={{color:"red"}}>{errors.email}</p> : null}
      </label>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <button disabled={isButtonDisabled} type="submit">Submit</button>
    </form>
  );
};

export default OnBoardingForm;
