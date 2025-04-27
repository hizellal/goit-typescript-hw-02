import React from "react";
import { Toaster } from "react-hot-toast";

export const ErrorMessage: React.FC = () => {
  return <Toaster position="top-right" reverseOrder={false} />;
};