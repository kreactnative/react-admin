import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';

// import MenuIcon from 'material-ui-icons/Menu';
import AccountIcon from 'material-ui-icons/AccountCircle';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleAccountIconClick = this.handleAccountIconClick.bind(this);
    this.handleAccountClose = this.handleAccountClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAccountSettings = this.handleAccountSettings.bind(this);

    this.state = {
      accountMenuOpen: false,
      accountMenuAnchorEl: undefined,
    };
  }

  handleAccountIconClick(event) {
    this.setState({
      accountMenuOpen: true,
      accountMenuAnchorEl: event.currentTarget,
    });
  }

  handleAccountClose() {
    this.setState({
      accountMenuOpen: false,
      accountMenuAnchorEl: undefined,
    });
  }

  handleLogout() {
    this.handleAccountClose();
  }

  handleAccountSettings() {
    this.handleAccountClose();
  }

  render() {
    return (
      <AppBar position="fixed" style={{ zIndex: '1400' }}>
        <Toolbar >
          {/* <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
            Admin
          </Typography>
          <IconButton color="contrast" aria-label="Account Menu" onClick={this.handleAccountIconClick}>
            <AccountIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={this.state.accountMenuAnchorEl}
            open={this.state.accountMenuOpen}
            onRequestClose={this.handleAccountClose}
          >
            <MenuItem onClick={this.handleAccountSettings}>Account settings</MenuItem>
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
