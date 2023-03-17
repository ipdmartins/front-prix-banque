import React from "react";

import { useAuth } from "../../context/authProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.account) {
    return <h1>You are not logged in</h1>;
  }

  return children;
};
