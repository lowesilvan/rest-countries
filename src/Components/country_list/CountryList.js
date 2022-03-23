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
    
    return (
        <Grid container spacing={6}>
                {countries.map((country) => {
                    const { numericCode, name, population, region, capital, flag, } = country;

                    return (
                        <Grid item key={numericCode} xs={12} sm={6} md={4} lg={3}>
                            <CardActionArea>
                                <Card
                                    sx={{ height: 'auto', display: 'flex', flexDirection: 'column', marginTop: '50px', maxWidth: 350 }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={flag}
                                        alt={name}
                                        height="190"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h1">
                                            <strong>{name}</strong>
                                        </Typography>
                                        <Typography>
                                            Population: {population}
                                        </Typography>
                                        <Typography>
                                            Region: {region}
                                        </Typography>
                                        <Typography>
                                            Capital: {capital}
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
