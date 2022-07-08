import React, { useContext } from "react";
import DriverForm from "./../components/forms/DriverForm";

import { DriversContext } from "./../contexts/driver.context";

export default function AddDriver() {
  const { addDriver } = useContext(DriversContext);
  return (
    <>
      <h1>Add a driver</h1>
      <DriverForm submitHandler={addDriver} />
    </>
  );
}

//controller deals with mui in react-hook-form, keeps both happy
