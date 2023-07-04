import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopBar=()=>{
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' , marginBottom :'50px' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <IconButton size="large" edge="end" color="inherit">
            < AccountCircleIcon/>
          </IconButton>
          <IconButton size="large" edge="end" color="inherit">
            <KeyboardArrowDownIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}
export default TopBar