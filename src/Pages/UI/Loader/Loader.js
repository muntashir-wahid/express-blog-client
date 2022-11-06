import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loader;
