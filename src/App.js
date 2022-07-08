import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme";

import PageLayout from "./components/PageLayout";

import Home from "./pages/Home";
import AddDriver from "./pages/AddDriver";
import UpdateDriver from "./pages/UpdateDriver";
import NotFound from "./pages/NotFound";

import { DriversProvider } from "./contexts/driver.context";

function App() {
  return (
    <>
      <Router>
        {/* Baseline is mui's version of normalize */}
        <CssBaseline />
        {/* theme + context providers must go above everything they affect */}
        <ThemeProvider theme={theme}>
          <DriversProvider>
            <Routes>
              {/* Page layout to load every time the path begins with / */}
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                {/* slant gets attached to route path */}
                <Route path="add" element={<AddDriver />} />
                <Route path="update/:id" element={<UpdateDriver />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </DriversProvider>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
