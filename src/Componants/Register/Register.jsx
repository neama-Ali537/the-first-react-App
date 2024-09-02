import axios, { Axios } from "axios";
import React, { useState } from "react";

export default function Register() {
  let[error , seterror]=useState()
  let [user, setuser] = useState({
    frist_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });
  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setuser(myUser);
    console.log(myUser);
  }

  async function sendResiterToApi() {
    let { data } = await axios.post(
      `https://files.polygon.io/7f026370-b2b5-403d-9a72-b4b1c08fc2e6` , user
    );
console.log(data)
  }

  function submitRegisterForm(e) {
    e.preventDefault();
    sendResiterToApi();
  }
  return (
    <form onSubmit={submitRegisterForm}>
      <label htmlFor="frist_name">frist_name :</label>
      <input
        onChange={getUserData}
        className="my-2 my-imnput form-control"
        type="text"
        id="frist_name"
        name="frist_name"
      />
      <label htmlFor="last_name">Last_name :</label>
      <input
        onChange={getUserData}
        className="my-2 my-imnput form-control"
        type="text"
        id="last_name"
        name="last_name"
      />
      <label htmlFor="email">Email :</label>
      <input
        onChange={getUserData}
        className="my-2 my-imnput form-control"
        type="text"
        id="email"
        name="email"
      />
      <label htmlFor="password">Password :</label>
      <input
        onChange={getUserData}
        className="my-2 my-imnput form-control"
        type="text"
        id="password"
        name="password"
      />
      <label htmlFor="age">Age :</label>
      <input
        onChange={getUserData}
        className="my-2 my-imnput form-control"
        type="text"
        id="age"
        name="age"
      />
      <button className="btn btn-info ">Register</button>
    </form>
  );
}
