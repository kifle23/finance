import React, { FC } from "react";
import "./Spinner.css";
import { ClipLoader } from "react-spinners";

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner: FC<SpinnerProps> = ({ isLoading = true }: SpinnerProps) => {
  return (
    <div id="loading-spinner">
      <ClipLoader
        color={"#36d7b7"}
        loading={isLoading}
        size={35}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Spinner;

