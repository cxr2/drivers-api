import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import CircularProgress from "@mui/material/CircularProgress";

import { DriversContext } from "./../contexts/driver.context";

export default function Home() {
  const { fetchDrivers, loading, drivers, deleteDriver } =
    useContext(DriversContext);

  useEffect(() => {
    fetchDrivers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Box>
      <List>
        {drivers.map(({ firstname, lastname, age, email, _id }, i) => (
          <ListItem key={i}>
            {/* <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar> */}
            <ListItemText>
              Name: {firstname} {lastname}
              <br /> Age: {age}
              <br /> Email: {email}
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => deleteDriver(_id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
