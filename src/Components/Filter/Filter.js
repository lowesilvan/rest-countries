import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Stack, TextField, FormControl, MenuItem } from '@mui/material';


const Filter = (props) => {
    const searchCountry = props.searchCountry;
    const filterByRegion = props.filterRegion;
    const regionValue = props.regionTerm;
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ marginTop: '50px', justifyContent: 'space-between', paddingBottom: '50px', paddingTop: '50px', alignItems: 'center' }}
                spacing={{ xs: 4 }}
            >
                <FormControl variant="standard" fullWidth sx={{ maxWidth: { md: 400 } }}>
                    <TextField
                        onChange={searchCountry}
                        placeholder="Search for a country..."
                        size="medium"
                        margin="dense"
                        fullWidth
                        type="text"
                        name="search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="inherit" />
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
                <FormControl fullWidth variant="standard" sx={{maxWidth: {md: 220}}}>
                    <TextField
                        select
                        label="Filter By Region"
                        defaultValue={""}
                        value={regionValue}
                        onChange={filterByRegion}
                        fullWidth
                    >
                        <MenuItem value={""}></MenuItem>
                        <MenuItem value={"Africa"}>Africa</MenuItem>
                        <MenuItem value={"Americas"}>Americas</MenuItem>
                        <MenuItem value={"Asia"}>Asia</MenuItem>
                        <MenuItem value={"Europe"}>Europe</MenuItem>
                        <MenuItem value={"Oceania"}>Oceania</MenuItem>
                        <MenuItem value={"Polar"}>Polar</MenuItem>
                    </TextField>
                </FormControl>
            </Stack>
        </>
    )
}

export default Filter
