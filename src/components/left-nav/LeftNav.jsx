import React from 'react';

import Drawer from 'material-ui/Drawer';
import List, { ListSubheader, ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import DashboardIcon from 'material-ui-icons/Dashboard';

const LeftNav = () => (
  <Drawer
    open
    docked
  >
    <div>
      <List style={{ width: '250px' }}>
        <ListSubheader>logo</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </div>
  </Drawer>
);

export default LeftNav;
