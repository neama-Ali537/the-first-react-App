import axios from "axios";

import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login({ saveUserData }) {

  let navigate = useNavigate();
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);
  let [user, setuser] = useState({
    email: "",
    password: "",
  });
  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setuser(myUser);
    console.log(myUser);
  }
  async function getDataFromApi() {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        user
      );
      if (data.message === "success") {
        localStorage.setItem("userToken", data.token);
        saveUserData();

        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        switch (error.response.status) {
          case 409:
            setError(
              "This email is already registered. Please use a different email."
            );
            break;
          case 400:
            setError("Password is required.");
            break;
          case 401:
            setError("Invalid email or password.");
            break;
          default:
            setError(`Unexpected error: ${error.message}`);
        }
      } else {
        setError(`Unexpected error: ${error.message}`);
      }
    }
  }
  function submitLoginForm(e) {
    e.preventDefault(e);
    setLoading(true);
    getDataFromApi();
  }
  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={submitLoginForm}>
        <label htmlFor="email">Enter Your Email :</label>
        <input
          onChange={getUserData}
          className="my-2 form-control my-input"
          type="text"
          name="email"
          id="email"
        />
        <label htmlFor="name">Enter Your Password :</label>
        <input
          onChange={getUserData}
          className="my-2 form-control my-input"
          type="password"
          name="password"
          id="password"
        />

        <button className="btn btn-info">
          {loading == true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}
