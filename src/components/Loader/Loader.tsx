import React from "react";
import css from "./Loader.module.css";
import BarLoader from "react-spinners/BarLoader";

export const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <BarLoader
        color="#0303f7"
        width={150}
        height={5}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
};