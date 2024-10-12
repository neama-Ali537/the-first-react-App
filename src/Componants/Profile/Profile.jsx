import React, { useContext } from "react";
import { AhthContext } from "../../ConText/AhthContext";

export default function Profile() {
  let { userData } = useContext(AhthContext);

  if (!userData) {
    return <p>ther is no Data</p>;
  }
  return (
    <div className="container my-5">
      <h4 className="font">Profile Information</h4>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            className="rounded-circle img-thumbnail mb-3"
            src={"https://via.placeholder.com/150"}
            alt=""
          />
          <h3>
            Your Name is:<p>{userData.name}</p>
          </h3>
        </div>
        <div className="col-md-8">
          <div>
            <label className="mt-3 p-2" htmlFor="Email">
              {" "}
              Email
            </label>
            <input
              className="my-imnput"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label className="mt-3 p-2" htmlFor="number">
              {" "}
              Phone
            </label>
            <input
              className="my-imnput"
              type="number"
              placeholder="Enter your Phone"
            />
          </div>

          <h4 className=" font mt-4">Sitting</h4>
          <button className="btn btn-primary m-2 p-2">Edit Profile</button>
          <button className="btn btn-secondary m-2 p-2">Change Password</button>
        </div>
      </div>
    </div>
  );
}
