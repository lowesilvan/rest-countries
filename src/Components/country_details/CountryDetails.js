import { Container, Grid, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const CountryDetails = () => {
    const Navigate = useNavigate();
    return (
        <>
            <Container maxWidth="lg" sx={{ }}>
                <Grid>
                    <Button 
                        variant="contained"
                        onClick={() => {
                            Navigate('/')
                        }}
                    >
                        Back
                    </Button>
                </Grid>  
            </Container>  
        </>
    )
}

export default CountryDetails
