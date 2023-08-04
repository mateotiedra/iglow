import React from 'react';

import NavbarLogic from './NavbarLogic';

import {
  AppBar,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { HashLink as RouterLink } from 'react-router-hash-link';

import Iglow from '../../assets/logos/iglow-white.svg';
import SwissMade from '../../assets/logos/swiss-made.svg';
import Indiegogo from '../../assets/logos/indiegogo-white.svg';
import Kickstarter from '../../assets/logos/kickstarter-white.svg';

function Navbar({ admin, coverPage }) {
  const { drawerOpened, toggleDrawer } = NavbarLogic(admin);

  const drawer = (
    <SwipeableDrawer
      anchor={'left'}
      open={drawerOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{
          width: 250,
          height: '100%',
          backgroundColor: 'background.default',
        }}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* <List>
          {navLinksObj.map((linkObj) => {
            return (
              <ListItem
                button
                key={linkObj.text}
                component={linkObj.href ? 'a' : RouterLink}
                to={linkObj.to ?? ''}
                href={linkObj.href ?? ''}
                sx={{
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  '&:hover': { textDecoration: 'none' },
                }}
              >
                <ListItemText primary={linkObj.text} />
              </ListItem>
            );
          })}
        </List> */}
      </Box>
    </SwipeableDrawer>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '100px',
          backgroundColor: 'background.default',
          height: 92,
        }}
      >
        <Box display='flex' flexDirection='row' alignItems='center' gap='16px'>
          <img src={Iglow} alt='logo' style={{ height: '48px' }} />
          <img src={SwissMade} alt='logo' style={{ height: '24px' }} />
        </Box>
        <Typography variant='subtitle2'>
          Coming soon on &nbsp;
          <img src={Indiegogo} alt='indiegogo' style={{ height: '12px' }} />
          &nbsp; & &nbsp;
          <img src={Kickstarter} alt='kickstarter' style={{ height: '12px' }} />
        </Typography>
        <Button variant='contained'>Join Us</Button>
        {/* {!empty &&
          navLinksObj.map((linkObj) => {
            return (
              <Link
                key={linkObj.text}
                component={linkObj.href ? 'a' : RouterLink}
                to={linkObj.to ?? ''}
                href={linkObj.href ?? ''}
                sx={{
                  mx: 1,
                  px: 1,
                  py: 2,
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  transitionDuration: '500ms',
                  border: '2px solid transparent',
                  ':hover': {
                    borderBottomColor: 'primary.main',
                    textDecoration: 'none',
                    color: 'primary.main',
                  },
                  display: { xs: 'none', md: 'none', lg: 'inline' },
                }}
              >
                <Typography variant='h6'>{linkObj.text}</Typography>
              </Link>
            );
          })} */}
        {/* <IconButton
          sx={{
            p: 2,
            display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
            color: 'text.primary',
          }}
          onClick={toggleDrawer(true)}
        >
          {drawerOpened ? <FiX size={25} /> : <FiMenu size={25} />}
        </IconButton> */}
      </AppBar>
      {drawer}
    </>
  );
}

export default Navbar;
