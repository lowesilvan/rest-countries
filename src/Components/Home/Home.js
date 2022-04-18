import React from 'react';
import CountryList from '../country_list/CountryList';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Filter from '../Filter/Filter';
import LoadingSpin from "react-loading-spin";

const Home = (props) => {
    const country = props.Country;
    const error = props.error;
    const isPending = props.Pend;
    const searchCountry = props.searchItem;
    const searchTerm = props.searchTerm;
    const filterRegion = props.filterRegion;
    const regionTerm = props.regionTerm;
    const handleEnter = props.Enter

    return (
        <main>
            <Container sx={{ py: 0 }} maxWidth="xl">
                <Filter Country={country} searchCountry={searchCountry} filterRegion={filterRegion} regionTerm={regionTerm} Enter={handleEnter}/>
                {error && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}>{error}</Typography>}
                {isPending && 
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
                {country && <CountryList Country={country} searchTerm={searchTerm} regionTerm={regionTerm}/>}
            </Container>
        </main>
    )
}

export default Home
