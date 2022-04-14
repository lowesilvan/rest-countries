import React from 'react';
import CountryList from '../country_list/CountryList';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Filter from '../Filter/Filter';
import LoadingSpin from "react-loading-spin";

const Home = ({Country, error, Pend, searchItem, searchTerm, filterRegion, regionTerm, Enter}) => {
    // handle logic for filterr here instead of in App.js;
    // have a state for search term and filter region
    // Country list you only have to display data
    return (
        <main>
            <Container sx={{ py: 0 }} maxWidth="xl">
                <Filter Country={Country} searchCountry={searchItem} filterRegion={filterRegion} regionTerm={regionTerm} Enter={Enter}/>
                {error && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}>{error}</Typography>}
                {Pend && 
                    <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}><LoadingSpin 
                        duration="2s"
                        width="10px"
                        timingFunction="ease-in-out"
                        direction="normal"
                        size="100px"
                        primaryColor="inherit"
                        secondaryColor="hsl(209, 23%, 22%)"
                        numberOfRotationsInAnimation={3}
                    />
                    </Typography>}
                {Country && <CountryList Country={Country} searchTerm={searchTerm} regionTerm={regionTerm}/>}
            </Container>
        </main>
    )
}

export default Home
