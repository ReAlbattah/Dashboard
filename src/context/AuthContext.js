import { createContext, useState } from "react";


const AuthContext = createContext();
export const AuthProvider = ({ children }) => {


  const [isLogged, setIsLogged] = useState(localStorage.getItem("loggedIn"));
  
  const logincustomers = async (email, password) => {
    
    console.log("llll");
    try {
      const request = await fetch("/customers/admin/login", {
        headers: {
          Authorization: `Basic ${window.btoa(email + ":" + password)}`,
          "X-Requested-Width": "XMLHttpRequest",
          
        },
        method: "POST",
      });
      console.log(2);
      const data = await request.json();
      console.log(3);
      console.log(data.msg);
      console.log(4);
      if (request.status === 401) {
        console.log("errrrror");
        
        return false;
      }
      if (request.status === 200) {
        // if(data.role=="admin"){
        //   return N
        // }
        console.log("nav");
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  // const loginadmin = async (email, password) => {
  //   console.log(1);
  //   try {
  //     const request = await fetch("/facilities-admins/login", {
  //       headers: {
  //         Authorization: `Basic ${window.btoa(email + ":" + password)}`,
  //         "X-Requested-Width": "XMLHttpRequest",
  //       },
  //       method: "POST",
  //     });
  //     console.log(2);
  //     const data = await request.json();
  //     console.log(3);
  //     console.log(data.msg);
  //     console.log(4);
  //     if (request.status === 401) {
  //       return false;
  //     }
  //     if (request.status === 200) {
  //       console.log("nav");
  //       return true;
  //     }
  //     return false;
  //   } catch (e) {
  //     console.log(e);
  //     return false;
  //   }
  // };
  const loginsecurity = async (email, password) => {
    console.log(1);
    try {
      const request = await fetch("/securities/login", {
        headers: {
          Authorization: `Basic ${window.btoa(email + ":" + password)}`,
          "X-Requested-Width": "XMLHttpRequest",
        },
        method: "POST",
      });
      console.log(2);
      const data = await request.json();
      console.log(3);
      console.log(data.msg);
      console.log(4);
      if (request.status === 401) {
        return false;
      }
      if (request.status === 200) {
        console.log("nav");
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const adminregister = async (email, password, phonenumber, name) => {
    const bodyData = JSON.stringify({
      myUser: {
        password: password,
        phoneNumber: phonenumber,
        name: name,
        email: email,
        role: "owner",
      },
    });
    try {
      console.log("1");
      const request = await fetch("customers/register", {
     
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: bodyData,
      });
      console.log("2");
      const data = await request.json();
      console.log(data);
      if (request.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const customersregister = async (email, password, phonenumber, name) => {
    const bodyData = JSON.stringify({
      myUser: {
        password: password,
        phoneNumber: phonenumber,
        name: name,
        email: email,
        role: "customer",
      },
    });
    try {
      const request = await fetch("customers/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: bodyData,
      });
      const data = await request.json();
      console.log(data);
      if (request.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const securityregister = async (email, password, phonenumber, name) => {
    const bodyData = JSON.stringify({
      myUser: {
        password: password,
        phoneNumber: phonenumber,
        name: name,
        email: email,
        role: "security",
      },
    });
    try {
      const request = await fetch("/register/{facility_id}", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: bodyData,
  });
  const data = await request.json();
  console.log(data);
  if (request.status === 200) {
    return true;
  } else {
    return false;
  }
} catch (e) {
  console.error(e);
  return false;
}
};
const addIsLogged = () => {
setIsLogged(true);
localStorage.setItem("loggedIn", true);
};
return (
<AuthContext.Provider
  value={{
    isLogged,
    addIsLogged,
    customersregister,
    securityregister,
    adminregister,
    logincustomers,
  

    loginsecurity 
  }}
>
 
  {children}
</AuthContext.Provider>
);
};
export default AuthContext;