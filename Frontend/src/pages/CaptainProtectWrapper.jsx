import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  //   console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // const data = response.data
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      //yaani ki agr token nhai hai ya fir expire ho gya hai , to fir token ko hta dhenge
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });

  //agr token aapko  milta hai to aap ek kaam aur kro ki request kro
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //else hum kiya krnge ki jo uska childern hai usko return kr dhenge
  return <>{children}</>;
};

export default CaptainProtectWrapper;
