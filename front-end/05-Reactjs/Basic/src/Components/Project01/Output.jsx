import React from "react";

const Output = ({ data }) => {
  return (
    <div>
      <h1> output </h1>
      {data.map((info, i) => {
        return (
          <>
            <h1>{info.name} </h1>
            <h1>{info.email} </h1>
          </>
        );
      })}
    </div>
  );
};

export default Output;
