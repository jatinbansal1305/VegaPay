import React, { useState } from 'react';
import { Typography,  Button, Container, Grid,  } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import KitTab from '../components/KitTab';
import TopBar from '../components/AppBar';
import PersonalizedTab from '../components/PersonalizedTab';
import ReissueTab from '../components/ReIssueTab';

export const CardSale = () => {
  const [activeButton, setActiveButton] = useState('kit');

  const handleButtonClick = (event, buttonId) => {
    setActiveButton(buttonId);
  };


  return (
    <>
    
    <TopBar/>
    
   
      <Container sx={{ backgroundColor: 'white', borderRadius: 3, }} maxWidth="xl">
        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
          <Grid item xs={12} style={{marginBottom :'20px'}}>
            <Typography sx={{ marginTop: '-10px' }} paragraph>
              New Card Sale
            </Typography>
            <Typography sx={{ marginBottom: '10px', marginTop: '-10px' }}>Issue New Card</Typography>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Button fullWidth variant="outlined" startIcon={<BadgeIcon />} size="large"  onClick={(event) => handleButtonClick(event, 'kit')}  sx={{ ...(activeButton === 'kit' && { borderColor: 'black' ,color :'black'}) }}>
                  Kit
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="outlined" startIcon={<BadgeIcon />} size="large" onClick={(event) => handleButtonClick(event, 'sale')}  sx={{ ...(activeButton === 'sale' && { borderColor: 'black',color :'black' }) }}>
                  Personalised Sale
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth variant="outlined" startIcon={<BadgeIcon />} size="large" onClick={(event) => handleButtonClick(event, 'reissue')}  sx={{ ...(activeButton === 'reissue' && { borderColor: 'black' ,color :'black'}) }}>
                  Reissue
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
     
      {activeButton=='kit' && <KitTab/>}
      {activeButton=='sale' && <PersonalizedTab/>}
      {activeButton=='reissue' && <ReissueTab/>}
      
    </>
  );
};
