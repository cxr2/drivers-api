import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DriverForm from "./../components/forms/DriverForm";

import { DriversContext } from "./../contexts/driver.context";

export default function UpdateDriver() {
  const { drivers, updateDriver } = useContext(DriversContext);
  const navigate = useNavigate();
  const { id } = useParams();

  //find id and pass it down
  const driver = drivers.find(({ _id }) => _id === id);

  const handler = (id, data) => {
    updateDriver(id, data);
    //update car and navigate back to homepage
    navigate("/");
  };

  return (
    <>
      <h1>Update Driver</h1>
      <DriverForm submitHandler={handler} driver={driver} />
    </>
  );
}
