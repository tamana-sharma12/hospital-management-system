import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRouter({children}){
    const isLoggedIn = localStorage.getItem("login");
    if(!isLoggedIn){
        return<Navigate to="/login"/>
    }
    return children;
}
export default ProtectedRouter;