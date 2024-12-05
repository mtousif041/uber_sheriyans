import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState(""); // inko two way binding bhi khete hai
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);

    setCaptainData({
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
          className="w-20 mb-3 "
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt="logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Captaion's email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg py-2 border placeholder:text-base"
            placeholder="captain@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Captain's Password</h3>
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
            Join a fleet{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center bg-[#d5622d] font-semibold mb-5 rounded px-4 w-full text-white py-2  placeholder:text-base"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
