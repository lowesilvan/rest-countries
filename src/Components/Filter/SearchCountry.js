import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { FormControl, TextField } from '@mui/material';

const SearchCountry = () => {
    return (
        <div>
            <FormControl fullWidth>
                <TextField
                    placeholder="Search for a country..."
                    size="normal"
                    margin="dense"
                    fullWidth
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
        </div>
    )
}

export default SearchCountry
