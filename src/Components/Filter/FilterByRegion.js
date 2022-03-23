import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';


const FilterByRegion = () => {
    const [region, setRegion] = useState('');

    const handleChange = (event) => {
        setRegion(event.target.value);
    };
    return (
        <>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel sx={{fontSize: '14px'}}>Filter By Region</InputLabel>
                <Select
                    value={region}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="Africa">Africa</MenuItem>
                    <MenuItem value="Americas">America</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europe</MenuItem>
                    <MenuItem value="Oceania">Oceania</MenuItem>
                    <MenuItem value="Polar">Polar</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default FilterByRegion
