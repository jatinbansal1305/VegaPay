import React, { useContext } from 'react';
import { Typography, Box, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft, ChevronRight, Home, Explore, Person } from '@mui/icons-material';
import { styled } from '@mui/system';
import { AppContext } from '../contexts/CardContext';
import MenuIcon from '@mui/icons-material/Menu';
const ListData=[
  "Team Management",
  "Application Managemnet",
  "Corporate Management",
  "User Management",
  "Card Sale",
  "Card Transaction",
  "Inventory Management",
  "Release Management",
  "Release Management",
  "Services"
]
const SidebarWrapper = styled(Box)(({ theme, isOpen }) => ({
  position: 'fixed',
  top: 0,
  left: isOpen ? 0 : '-200px',
  height: '100vh',
  width: '200px',
  backgroundColor: '#0a1427',
  padding: theme.spacing(2),
  color: '#fff',
  transition: 'right 0.3s ease-in-out',
  overflow: 'hidden',
}));

const ContentWrapper = styled(Box)(({ isOpen }) => ({
  marginLeft: isOpen ? '200px' : '0px',
  transition: 'margin-right 0.3s ease-in-out',
}));

const IconButtonWrapper = styled(Box)({
  marginLeft: 'auto',
});

const Sidebar = () => {
  const { isOpen, toggleOpen } = useContext(AppContext);

  return (
    <Box display="flex">
      <SidebarWrapper isOpen={isOpen}>
        <Typography variant="h6" sx={{ color: '#fff', marginBottom: '20px', marginLeft: '30px' }}>
          Vegapay
        </Typography>
        <List>
          {ListData.map(item=>(
            <ListItem button >
            <ListItemText primary={item} />
          </ListItem>
          ))}
        </List>
      </SidebarWrapper>
      <ContentWrapper isOpen={isOpen}>
        <IconButtonWrapper>
          <IconButton onClick={toggleOpen} sx={{color :'white'}}>
            {isOpen ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </IconButtonWrapper>
      </ContentWrapper>
    </Box>
  );
};

export default Sidebar;
