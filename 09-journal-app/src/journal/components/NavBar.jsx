import {LogoutOutlined, MenuOutlined} from "@mui/icons-material"
import { AppBar , IconButton, Toolbar, Grid, Typography } from "@mui/material"

// eslint-disable-next-line react/prop-types
export const NavBar = ({drawerWidth =240}) => {
  return (
    <AppBar 
        position="fixed" 
        sx={{
            width: {sm:`calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                aria-label="menu"
                sx={{mr:2 , display:{sm:'none'}}}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>Journal App</Typography>
                <IconButton color='error'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
