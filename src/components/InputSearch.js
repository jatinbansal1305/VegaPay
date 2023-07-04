import React from 'react';
import {Container, TextField, Button, Grid,InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const InputSearch=({searchValue,handleSearch,handleSearchChange})=>{
    return (
        <Container sx={{ backgroundColor: 'white', borderRadius: 3, paddingBottom: '25px', marginTop: '60px',marginBottom :'20px', }} maxWidth="xl">
        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={searchValue}
                  onChange={handleSearchChange}
                  size="medium"
                  id="outlined-basic"
                  placeholder="Search by Mobile or Customer ID"
                  variant="outlined"
                  sx={{ marginRight: '25px', width: '80%' }}
                />
              </Grid>
             <Grid>
             <Button variant="contained" onClick={handleSearch}>Search</Button>
             </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
}

export default InputSearch