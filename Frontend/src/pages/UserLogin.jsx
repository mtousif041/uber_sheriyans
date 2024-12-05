import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState(""); // inko two way binding bhi khete hai
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);

    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10 "
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt="logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg py-2 border placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              // console.log(e.target.value);
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg py-2 border placeholder:text-base"
            placeholder=" enter password"
          />
          <button className="bg-[#111] font-semibold mb-3 rounded px-4 w-full text-white py-2  placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New Here{" "}
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-[#10b461] font-semibold mb-9 rounded px-4 w-full text-white py-2  placeholder:text-base"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
