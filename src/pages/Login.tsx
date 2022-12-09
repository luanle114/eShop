import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Signin from "../components/Signin/Signin";

const Login = () => {
  return(
    <div>
      <Navbar/>
      <Signin/>
      <Footer/>
    </div>
  )
}

export default Login;