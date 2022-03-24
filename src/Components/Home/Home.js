import React from 'react';
import CountryList from '../country_list/CountryList';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Filter from '../Filter/Filter';

const Home = (props) => {
    const country = props.Country;
    const error = props.error;
    const isPending = props.Pend;
    const searchCountry = props.searchItem;
    const searchTerm = props.searchTerm;
    const filterRegion = props.filterRegion;
    const regionTerm = props.regionTerm;

    return (
        <main>
            <Container sx={{ py: 0 }} maxWidth="lg">
                <Filter Country={country} searchCountry={searchCountry} filterRegion={filterRegion} regionTerm={regionTerm}/>
                {error && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}>{error}</Typography>}
                {isPending && <Typography align="center" variant="h4" component="h3" color="inherit" sx= {{marginTop: '100px'}}>Loading...</Typography>}
                {country && <CountryList Country={country} searchTerm={searchTerm} regionTerm={regionTerm}/>}
            </Container>
        </main>
    )
}

export default Home
