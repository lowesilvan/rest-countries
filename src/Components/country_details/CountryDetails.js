import { Container, Grid, Button, Typography, Card, CardContent, CardMedia, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import FetchApi from '../../Components/FetchApi/FetchApi'
import { useParams } from 'react-router'

const CountryDetails = () => {
    const Navigate = useNavigate();
    const { slug } = useParams()
    const { data: country, isPending, error } = FetchApi(`https://restcountries.com/v2/name/${slug}`);

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingTop: '80px'}}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Button
                            variant="conatined"
                            color="inherit"
                            onClick={() => {
                                Navigate('/')
                            }}
                            size="medium"
                        >
                            <Box sx={{padding: '5px', alignItems: 'center'}}>
                                <svg style={{ margin: 'auto 7px', alignItems: 'center' }}
                                    stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                    strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"><line x1="28" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Back
                            </Box>
                        </Button>
                    </Grid>
                    {isPending && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ margin: '100px auto' }}>Loading...</Typography>}
                    {error && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}>{error}</Typography>}
                    { country && <Grid component="main" xs={12} item>
                        {country.map((c) => {
                            const { numericCode, flag, name,
                                nativeName, population, region,
                                subregion, capital, topLevelDomain,
                                currencies, languages, borders } = c
                            
                            return (
                                <Card key={numericCode} sx={{ display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}} spacing={{xs: 5, lg: 2}}>
                                        <CardMedia 
                                            component="img"
                                            sx={{ width: {xs: 300, sm: 500}, margin: {xs: '0 auto', lg: '0'} }}
                                            image={flag}
                                            alt={name}
                                        />
                                        <CardContent>
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }} spacing={2}>
                                                <CardContent spacing={2}>
                                                    <Typography gutterBottom variant="h3" component="h2" sx={{fontSize: {xs: '28px'}, fontWeight: 700}}>{name}</Typography>
                                                    <Typography variant="paragraph" component="div">Native Name: {nativeName}</Typography>
                                                    <Typography variant="paragraph" component="div">population: {population}</Typography>
                                                    <Typography variant="paragraph" component="div">Region: {region}</Typography>
                                                    <Typography variant="paragraph" component="div">Sub Region: {subregion}</Typography>
                                                    {capital && <Typography variant="paragraph" component="div">Capital: {capital}</Typography>}
                                                    {!capital && <Typography variant="paragraph" component="div">Capital: None</Typography>}
                                                </CardContent>
                                                <CardContent sx={{ marginTop: { xs: 'auto' } }}>
                                                    <Typography variant="paragraph" component="div">Top Level Domain: {topLevelDomain} </Typography>
                                                    <Typography variant="paragraph" component="div">Currencies: {currencies.map((m, key) => {
                                                        return (
                                                            <span key={key}> {m.name}</span>
                                                        )
                                                    })}</Typography>
                                                    <Typography variant="paragraph" component="div">Languages: {languages.map((l, key) => {
                                                        return (
                                                            <span key={key}> {l.name}</span>
                                                        )
                                                    })}</Typography>
                                                </CardContent>
                                            </Box>
                                            <CardContent sx={{ marginTop: { xs: 'auto' }, display: {xs: 'flex'} }}>
                                                <Typography variant="Paragraph" component="div" sx={{flexDirection: {xs: 'column', lg: 'row'}}}>Border Countries:
                                                    {borders && borders.map((b, key) => {
                                                        const lowerB = b.toLowerCase()
                                                            return (
                                                                <Button onClick={() => {
                                                                    Navigate(`/countries/${lowerB}`)
                                                                }} key={key} color="inherit" size="small" sx={{margin: '0 7px'}}>{b}</Button>
                                                            )
                                                    })}
                                                    {!borders && <span> None</span>}
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                </Card>
                            )
                        })}
                    </Grid>}
                </Grid>
            </Container>  
        </>
    )
}

export default CountryDetails
