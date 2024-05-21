import React, { useState } from "react";
import InputContainer1 from "./InputContainer1";
import Output from "./Output";

const Project1 = () => {
  const [doc, setDoc] = useState([]);
  const handleFormSubmitData = (data) => {
    setDoc([...doc, data]);
  };
  return (
    <div>
      <InputContainer1 handleFormSubmitData={handleFormSubmitData}/>
      <Output data={doc}/>
    </div>
  );
};

export default Project1;
