import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import CountryDetails from "./Components/country_details/CountryDetails";
import NotFound from "./Components/404 Page/NotFound";
import useFetch from '../src/Components/FetchApi/FetchApi';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const { data: country, isPending, error } = useFetch('https://restcountries.com/v2/all');
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const searchCountry = (e) => {
    setSearchTerm(e.target.value);
  }

  const filterByRegion = (e) => {
    setFilterRegion(e.target.value);
  }
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home 
                                            Country={country} 
                                            Pend={isPending} 
                                            error={error} 
                                            searchItem={searchCountry}
                                            searchTerm={searchTerm}
                                            filterRegion = {filterByRegion}
                                            regionTerm = {filterRegion}
                                      />
            }/>
            <Route>
              <Route path="/countries/:name" element={<CountryDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
