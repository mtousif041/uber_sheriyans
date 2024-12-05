import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContextt";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  //   const { user } = useContext(UserDataContext);

  //   if (!user.email) {
  //     navigate("/login");
  //   }

  //   console.log(token);

  //agr user ne login krne ke baaad page ko reload kr diya to means ki user to gya yaani reload ki wajha se user logout ho jaayega, to hum direct user pr depent na hoker token pr depent ho jaate hai

  //isme aaap check kroge ki agr  user exist krta hai to aap perticular children ko return kr doge aur agr user exist nahi krta hai tab aap usko navigate krdoge wapas login pe
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  //else hum kiya krnge ki jo uska childern hai usko return kr dhenge

  return <>{children}</>;
};

export default UserProtectWrapper;
