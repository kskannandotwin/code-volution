import React from "react";
import type { Greet } from "../Greet";

export const CustomComoponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
