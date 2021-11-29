import { useSelector } from "@src/redux/store";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const PublicOnlyRoute = ({ component: Component, ...rest }: RouteProps) => {
  const isAuth = useSelector((state) => !!state.auth?.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicOnlyRoute;
