import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import CountryDetails from "./Components/country_details/CountryDetails";
import NotFound from "./Components/404 Page/NotFound";
import CssBaseline from '@mui/material/CssBaseline';
import FetchApi from "../src/Components/FetchApi/FetchApi";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: {
        default: 'hsl(207, 26%, 17%)',
        paper: 'hsl(207, 26%, 17%)',
      },
    }),
  },
});


const light = {
  palette: {
    mode: "light",
  },
};

function App() {
  const { data: country, isPending, error } = FetchApi('https://restcountries.com/v2/all');
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const searchCountry = (e) => {
    setSearchTerm(e.target.value);
  }

  const filterByRegion = (e) => {
    setFilterRegion(e.target.value);
  }

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  return (
    <Router>
      <ThemeProvider theme={isDarkTheme ? createTheme(getDesignTokens('dark')) : createTheme(light)}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ background: isDarkTheme ? '' : 'hsl(0, 0%, 98%)' }}>
          <div className="App">
            <Navbar changeTheme={changeTheme} isDarkTheme={isDarkTheme}/>
            <div className="content">
              <Routes>
                <Route path="/home" 
                  element={<Home
                    Country={country}
                    Pend={isPending}
                    error={error}
                    searchItem={searchCountry}
                    searchTerm={searchTerm}
                    filterRegion={filterByRegion}
                    regionTerm={filterRegion}
                  />} 
                />
                <Route>
                  <Route path="/countries/:slug" element={<CountryDetails />} Country={country}/>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
