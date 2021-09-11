import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Link from 'next/link';

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          //className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <StorefrontIcon />
        </IconButton>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/create-item">
          <a>Create/Sell Digital Asset</a>
        </Link>
        <Link href="/my-items">
          <a>My Digital Assets</a>
        </Link>
        <Link href="/creator-dashboard">
          <a>Creator Dashboard</a>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
