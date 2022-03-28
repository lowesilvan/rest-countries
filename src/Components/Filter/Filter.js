import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Stack, TextField, Box, FormControl, InputLabel, NativeSelect} from '@mui/material';


const Filter = (props) => {
    const searchCountry = props.searchCountry;
    const filterByRegion = props.filterRegion;
    const regionValue = props.regionTerm;
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                sx={{marginTop: '50px', justifyContent: 'space-between', paddingBottom: '50px', paddingTop: '50px'}}
                spacing={{ xs: 4 }}
            >
                <FormControl variant="standard">
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
                                        <SearchIcon color="inherit" />
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>
                <Box sx={{ minWidth: 200, position: 'relative', color: 'inherit'}}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Filter By Region
                        </InputLabel>
                        <NativeSelect
                            label="Filter By Region"
                            defaultValue={""}
                            value={regionValue}
                            onChange={filterByRegion}
                            variant="standard"
                            inputProps={{
                                name: 'Filter By Region',
                                id: 'uncontrolled-native'
                            }}
                            sx={{ fontSize: '15px'}}
                        >
                            <option value={""}></option>
                            <option value={"Africa"} sx={{padding: 10}}>Africa</option>
                            <option value={"Americas"}>Americas</option>
                            <option value={"Asia"}>Asia</option>
                            <option value={"Europe"}>Europe</option>
                            <option value={"Oceania"}>Oceania</option>
                            <option value={"Polar"}>Polar</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
            </Stack>
        </>
    )
}

export default Filter
