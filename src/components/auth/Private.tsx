import React from "react";
import { Login } from "./Login";
import { type ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="John Doe" />;
  } else {
    return <Login />;
  }
};
