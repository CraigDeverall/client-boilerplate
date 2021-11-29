import { useSelector } from "@src/redux/store";
import { SignInView } from "@src/views/sign-in";
import React from "react";
import { Route, RouteProps } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  const isAuth = useSelector((state) => !!state.auth?.token);
  return (
    <Route
      {...rest}
      render={(props) => (isAuth ? <Component {...props} /> : <SignInView />)}
    />
  );
};

export default PrivateRoute;
