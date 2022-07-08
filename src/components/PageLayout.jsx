import React from "react";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

import Header from "./Header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">
          {/*Content goes here  */}
          {/* Outlet draws in children from router not props */}
          <Outlet />
        </Container>
      </main>
    </>
  );
}
