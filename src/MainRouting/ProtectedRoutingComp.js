// import React, { Component, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const ProtectedRoutingComp = () => {
//     const nav = useNavigate();
//     useEffect(()=>{
//         if(!sessionStorage.getItem("user")){
//             nav("/");
//         }

//     },[])
//   return (
//     <div>
//         <h1>ProtectedRoutingComp</h1>
//         <Component></Component>
//     </div>
//   )
// }

// export default ProtectedRoutingComp

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutingComp = ({Component}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      navigate("/"); // Redirect to login or home page if user not authenticated
    }
  }, [navigate]);

  return (
    <div>
      {/* Optional: Add header, navigation, or layout */}
      {/* <h1>Welcome to the Dashboard</h1> */}
      {/* Render child routes */}
      <Component></Component>
      {/* <Outlet /> */}
    </div>
  );
};

export default ProtectedRoutingComp;
