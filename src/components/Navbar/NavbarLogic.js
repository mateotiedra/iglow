import { useState } from 'react';

const NavbarLogic = (admin) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpened(open);
  };

  return { drawerOpened, toggleDrawer };
};

export default NavbarLogic;
