import { Container, Grid, Button, Typography, Card, CardContent, CardMedia, Box } from '@mui/material'
import React from 'react'
import FetchApi from '../../Components/FetchApi/FetchApi'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const CountryDetails = (props) => {
    const { slug } = useParams()
    console.log({slug})
    const { data: country, isPending, error } = FetchApi(`https://restcountries.com/v2/alpha/${slug}`);

    console.log({country})
    return (
        <>
            <Container maxWidth="lg" sx={{ paddingTop: '80px'}}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Link to="/">
                            <Button
                                variant="conatined"
                                color="inherit"
                                size="small"
                                sx={{ boxShadow: 1 }}
                            >
                                <Box sx={{ padding: '5px', alignItems: 'center' }}>
                                    <svg style={{ marginTop: 'auto', marginLeft: '0', marginRight: '10px', alignItems: 'center' }}
                                        stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                        strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg"><line x1="28" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg>
                                    Back
                                </Box>
                            </Button>
                        </Link>
                    </Grid>
                    {isPending && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ margin: '100px auto' }}>Loading...</Typography>}
                    {error && <Typography align="center" variant="h4" component="h3" color="inherit" sx={{ marginTop: '100px' }}>{error}</Typography>}
                    { country && <Grid component="main" xs={12} item>
                        
                                <Card key={country[0].alpha3Code} sx={{ display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, height: 'auto'}} spacing={{xs: 5, lg: 2}}>
                                        <CardMedia 
                                            component="img"
                                            sx={{ margin: 0, maxInlineSize: '100%', blockSize: 'auto', width: 500}}
                                            image={country[0].flag}
                                            alt={country[0].name}
                                        />
                                        <CardContent>
                                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, ml: {lg: 7} }} spacing={3}>
                                                <CardContent spacing={3} sx={{ml: 0}}>
                                                    <Typography gutterBottom variant="h3" component="h2" sx={{fontSize: {xs: '32px'}, fontWeight: 700}}>{country[0].name}</Typography>
                                                    <Typography variant="paragraph" component="div"><strong>Native Name:  </strong>{country[0].nativeName}</Typography>
                                                    <Typography variant="paragraph" component="div"><strong>Population:  </strong>{new Intl.NumberFormat().format(country[0].population)}</Typography>
                                                    <Typography variant="paragraph" component="div"><strong>Region:  </strong>{country[0].region}</Typography>
                                                    <Typography variant="paragraph" component="div"><strong>Sub Region:  </strong>{country[0].subregion}</Typography>
                                                    {country[0].capital && <Typography variant="paragraph" component="div"><strong>Capital:  </strong>{country[0].capital}</Typography>}
                                                    {!country[0].capital && <Typography variant="paragraph" component="div"><strong>Capital:  </strong>None</Typography>}
                                                </CardContent>
                                            <CardContent sx={{ margin: 'auto', ml: 0}}>
                                                    <Typography variant="paragraph" component="div"><strong>Top Level Domain:  </strong>{country[0].topLevelDomain} </Typography>
                                                    <Typography variant="paragraph" component="div"><strong>Currencies:  </strong>{country[0].currencies.map((m, key) => {
                                                            return (
                                                                <span key={key}> {m.name}</span>
                                                            )
                                                        })}</Typography>
                                                    <Typography variant="paragraph" component="div"><strong>Languages:  </strong>{country[0].languages.map((l, key) => {
                                                            return (
                                                                <span key={key}> {l.name}</span>
                                                            )
                                                        })}</Typography>
                                                </CardContent>
                                            </Box>
                                            <CardContent sx={{ marginTop: { xs: 'auto' }, display: {xs: 'flex'}, ml: 'auto', alignItems: 'center'}}>
                                            <Typography variant="Paragraph" component="div" sx={{ flexDirection: { xs: 'column', lg: 'row' }, ml: {lg: 7}  }}><strong>Border Countries:  </strong>
                                                    {country[0].borders && country[0].borders.map((b, key) => {
                                                        const smallBorder = b.toLowerCase()
                                                            return (
                                                                <span style={{ margin: 'auto' }}>
                                                                    <Link to={`/countries/${smallBorder}`}>
                                                                        <Button key={key} color="inherit" size="small" sx={{ margin: '0 7px', boxShadow: 1 }}>{b}</Button>
                                                                    </Link>
                                                                </span>
                                                            )
                                                    })}
                                                    {!country[0].borders && <span> None</span>}
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                </Card>
                    </Grid>}
                </Grid>
            </Container>  
        </>
    )
}

export default CountryDetails
