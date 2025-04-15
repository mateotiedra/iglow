import React from 'react';

import NavbarLogic from './NavbarLogic';

import {
  AppBar,
  Button,
  Container,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { HashLink } from 'react-router-hash-link';

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
          background: 'transparent',
          position: 'absolute',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '10%',
            height: 92,
            position: 'relative',
          }}
        >
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            gap='16px'
            component={HashLink}
            to='/'
          >
            <Box
              component='img'
              src={Iglow}
              alt='logo'
              sx={{
                height: {
                  xs: '32px',
                  sm: '48px',
                },
              }}
            />
            <Box
              component='img'
              src={SwissMade}
              alt='logo'
              sx={{
                height: {
                  xs: '16px',
                  sm: '24px',
                },
              }}
            />
          </Box>
          {/* <Typography
            variant='subtitle2'
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'inline',
              },
            }}
          >
            Coming soon on &nbsp;
            <img src={Indiegogo} alt='indiegogo' style={{ height: '12px' }} />
            &nbsp; & &nbsp;
            <img
              src={Kickstarter}
              alt='kickstarter'
              style={{ height: '12px' }}
            />
          </Typography> */}

          <Button variant='contained' component={HashLink} to='/#join'>
            Join Us
          </Button>
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
        </Container>
      </AppBar>
      {drawer}
    </>
  );
}

export default Navbar;
