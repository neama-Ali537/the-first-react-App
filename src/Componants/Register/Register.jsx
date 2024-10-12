import axios from "axios";
import Joi, { allow } from "joi";
import React, {  useState } from "react";

import { useNavigate } from "react-router-dom";



export default function Register() {

  // to go forward LOGIN page
  let navigate = useNavigate();
  // for VALIDATION
  let [errorList , setErrorList]=useState([]);
  // for LOading Swparator
  let [loadind, setLoading] = useState(false);
  // for Errors
  let [error, setError] = useState("");
  // for input filds
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

// function to make COPY from User Object
  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  // API fetching Function
  async function sendRegisterToApi() {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        user
      );
      console.log(data);
      if (data.message === "success") {
        setLoading(false);
      
        navigate("/login");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if(error.response && error.response.status ===409){
setError("This email is already registered. Please use a different email.")
      }else{
            setError(`Unexpected error: ${error.message}`);
      }
  
    }
  }
  // valedation Function
  function validateRegisterForm() {
    let schame = Joi.object({
      name: Joi.string().min(3).max(10).required(),

      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),

      password: Joi.string().min(6).required(),

      rePassword: Joi.string().min(6).required(),
    });
    return schame.validate(user, { abortEarly:false});
  }
  //  submit onClick on Form
  function submitRegisterForm(e) {
    e.preventDefault();
    setLoading(true);
  
   let validate= validateRegisterForm();
  //  to make error list and show error msg in page
   if (validate.error ) {
    setLoading(false);
    setErrorList(validate.error.details)
   }else{
      sendRegisterToApi();
   }
  }

  return (
    <>
    {errorList.map((err )=>{
    
      if(err.context.label == 'password'){
        return <div className="alert alert-danger my-2 ">Password Invalid</div>
      }
    else{
      return <div className="alert alert-danger my-2 ">{err.message}</div>
    }
    })}
      {error.length > 0 ? (
        <div className="alert alert-danger my-2 ">{error}</div>
      ) : (
        ""
      )}
      <form  onSubmit={submitRegisterForm}>
        <label className="floatingInput" htmlFor="first_name">Your Name :</label>
        <input
          onChange={getUserData}
          className=" my-2 my-input form-control"
          type="text"
          id="name"
          name="name"
        />

        <label className="floatingInput" htmlFor="email">Email :</label>
        <input
          onChange={getUserData}
          className="my-2 my-input form-control"
          type="text"
          id="email"
          name="email"
        />
        <label className="floatingInput" htmlFor="password">Password :</label>
        <input
          onChange={getUserData}
          className="my-2 my-input form-control"
          type="password"
          id="password"
          name="password"
        />
        <label className="floatingInput" htmlFor="password">Your Password again:</label>
        <input
          onChange={getUserData}
          className="my-2 my-input form-control"
          type="password"
          id="rePassword"
          name="rePassword"
        />

        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-info">
          {loadind == true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </>
  );
}
