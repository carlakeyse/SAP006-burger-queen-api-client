import { isAuthenticated } from "././Services/validateAuth";
import { Route, Redirect } from "react-router-dom";

 const RoutesPrivate = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default RoutesPrivate;