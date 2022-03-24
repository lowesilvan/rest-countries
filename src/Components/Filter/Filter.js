import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Stack, TextField, Box, Select, FormControl, MenuItem, InputLabel} from '@mui/material';


const Filter = (props) => {
    const searchCountry = props.searchCountry;
    const filterByRegion = props.filterRegion;
    const regionValue = props.regionTerm;
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{marginTop: '80px', justifyContent: 'space-between', paddingBottom: '50px'}}
                spacing={{ xs: 4 }}
            >
                <FormControl>
                    <TextField 
                        onChange={searchCountry}
                        placeholder="Search for a country..."
                        size="small"
                        margin="dense"
                        fullWidth
                        type="text"
                        name="search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
                <Box sx={{ minWidth: 200}}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel sx={{ fontSize: '14px' }}>Filter By Region</InputLabel>
                        <Select
                            value={regionValue}
                            defaultValue={""}
                            label="Filter By Region"
                            onChange={filterByRegion}
                            sx={{ padding: '3px', flexWrap: 'wrap'}}
                        >
                                <MenuItem value={""}>All Regions</MenuItem>
                                <MenuItem value={"Africa"}>Africa</MenuItem>
                                <MenuItem value={"Americas"}>Americas</MenuItem>
                                <MenuItem value={"Asia"}>Asia</MenuItem>
                                <MenuItem value={"Europe"}>Europe</MenuItem>
                                <MenuItem value={"Oceania"}>Oceania</MenuItem>
                                <MenuItem value={"Polar"}>Polar</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </>
    )
}

export default Filter
