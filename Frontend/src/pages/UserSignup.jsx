import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState(""); // inko two way binding bhi khete hai
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <div>
          <img
            className="w-16 mb-10 "
            src="https://logospng.org/download/uber/logo-uber-4096.png"
            alt="logo"
          />
          {/* <div className="flex items-center justify-center mt-6">
          <h1 className="text-xl  font-medium mb-2 ">User Signup</h1>
        </div> */}
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base font-medium mb-2">What's your Name</h3>
            <div className="flex gap-4 mb-5">
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="bg-[#eeeeee] rounded px-4 w-1/2  text-base py-2 border placeholder:text-sm"
                placeholder="Firstname"
              />
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="bg-[#eeeeee]  rounded px-4 w-1/2 text-base py-2 border placeholder:text-sm"
                placeholder="Lastname"
              />
            </div>

            <h3 className="text-base font-medium mb-2">What's your email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-4 w-full text-base py-2 border placeholder:text-sm"
              placeholder="email@example.com"
            />
            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-4 w-full text-base py-2 border placeholder:text-sm"
              placeholder=" enter password"
            />
            <button className="bg-[#111] font-semibold mb-3 rounded px-4 w-full text-white py-2  placeholder:text-base">
              Login
            </button>
            <div>
              <p className="text-center">
                Already have a account{" "}
                <Link to="/login" className="text-blue-600">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            By proceeding, you consent to get calls, WhatsApp or SMS/RCS
            messages, including by automated dialer, from Uber and its
            affiliates to the number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
