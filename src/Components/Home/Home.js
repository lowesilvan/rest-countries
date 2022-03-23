import React from 'react';
import CountryList from '../country_list/CountryList';
import FilterByRegion from '../Filter/FilterByRegion';
import SearchCountry from '../Filter/SearchCountry';
import { Container, Grid } from '@mui/material';
import useFetch from '../FetchApi/FetchApi';
import { Typography } from '@mui/material';

const Home = () => {
    const { data: country, isPending, error } = useFetch('https://restcountries.com/v2/all');

    return (
        <main>
            <Container sx={{ py: 0 }} maxWidth="lg">
                <Grid sx={{marginTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <SearchCountry />
                    <FilterByRegion Country={country}/>
                </Grid>
                {error && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}>{error}</Typography>}
                {isPending && <Typography align="center" variant="h4" component="h3" color="inherit" sx= {{marginTop: '100px'}}>Loading...</Typography>}
                {country && <CountryList Country={country} error={error} Pend={isPending}/>}
            </Container>
        </main>
    )
}

export default Home
