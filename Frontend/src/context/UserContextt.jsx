import React, { createContext, useState } from "react";

/// hum iski help se context bnayege jisse data aage aage pass kr shake
export const UserDataContext = createContext();

const UserContextt = ({ children }) => {
  // agr tum yha pr ye children pass nhai kroge to har page pr tumhe sirf UserContexttt page hi dhikega login/signup/captain-login/signup har jgha , isliye hume yha children paas krna hota

  //ab yha pr data bna bhi leta hu user ke liye, aur agr ab user ko sub jagha pass krna hai to mere ko Provider ke aage value={user} bhi dena ppdega , ab hum isko khai bhi use kr shakte hai, maanlo ki agr hume isko App.jsx me use krna hai to wha jakr useContext(UserDataContext) krke use kr lenge
  //   const user = "Sarthak"; // C1120

  const [user, setUser] = useState({
    //inki initial value empty hogi
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    //   <div>{children}</div> // ab agr me chata hu ki me saara data sub jgha provide kr pau to is line ab khuch aise likh dhnge
    <div>
      {/* <UserDataContext.Provider value={user}>  C1120 */}
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContextt; // ab is UserContextt se humko pure aplication ko wrap krna pdega main.jsx me jaaker ke
