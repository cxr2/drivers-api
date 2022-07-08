import React, { useContext } from "react";
import DriverForm from "./../components/forms/DriverForm";

import { DriversContext } from "./../contexts/driver.context";

export default function AddDriver() {
  // need to usecontext to add driver

  const { addDriver } = useContext(DriversContext);
  return (
    <>
      <h1>Add a driver</h1>
      <DriverForm submitHandler={addDriver} />
    </>
  );
}
