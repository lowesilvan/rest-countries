import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';

const CountryList = (props) => {
    const countries = props.Country;
    const searchTerm = props.searchTerm;
    const regionValue = props.regionTerm;
  
    return (
        <Grid container spacing={{ xs: 6, md: 5 }} sx={{marginTop: '0'}}>
                {countries.filter((country) => {
                    const {region} = country;
                    if (regionValue === "") {
                        return country
                    } else if (region.toLowerCase() === regionValue.toLowerCase()) {
                        return country
                    }

                    return null
                }).filter((country) => {
                    const {name} = country;

                    if (searchTerm === "") {
                        return country
                    } else if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return country
                    }

                    return null

                }).map((country) => {
                    const { numericCode, name, population, region, capital, flag} = country;

                    return (
                        <Grid item key={numericCode} xs={12} sm={6} md={4} lg={3} xl={2}>
                            <CardActionArea component={RouterLink} to={`/countries/${name}`}>
                                <Card
                                    sx={{ width: { xs: 320, md: 270 }, height: '340px', display: 'flex', flexDirection: 'column', margin: 'auto'}}
                                >
                                    <CardMedia
                                        component="img"
                                        image={flag}
                                        alt={name}
                                        sx={{margin: 0, maxInlineSize: '100%', blockSize: 'auto', height: '200px'}}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h1">
                                            {name}
                                        </Typography>
                                        <Typography>
                                            <strong>Population:  </strong> {new Intl.NumberFormat().format(population)}
                                        </Typography>
                                        <Typography>
                                            <strong>Region:  </strong>  {region}
                                        </Typography>
                                        <Typography>
                                            <strong>Capital:  </strong>  {capital}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    )
                })}
            </Grid>
    )
}

export default CountryList
