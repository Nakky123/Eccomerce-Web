import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  console.log(auth);

  useEffect(() => {
    const authCheck = () => {
      // Assuming that useAuth provides a 'role' property in the auth object
      if (auth?.token && auth?.role === "admin") {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    authCheck();
  }, [auth?.token, auth?.role]);

  return ok ? <Outlet /> : <Spinner />;
}
