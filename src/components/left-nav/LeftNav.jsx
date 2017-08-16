import React from 'react';

import Drawer from 'material-ui/Drawer';
import List, { ListSubheader, ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import DashboardIcon from 'material-ui-icons/Dashboard';
import FolderIcon from 'material-ui-icons/Folder';

import { history } from 'store';
import config from 'config';

function navigate(id) {
  history.push(`${config.basePath}/section/${id}`);
}

const LeftNav = () => (
  <Drawer
    open
    docked
  >
    <div>
      <List style={{ width: '250px' }}>
        <ListSubheader style={{ height: '65px' }} />
        <ListItem button onClick={() => { history.push(`${config.basePath}`); }}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
      <Divider />
      <List style={{ width: '250px' }}>
        { config.sections.map(section => (
          <ListItem button onClick={() => { navigate(section.id); }}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={section.title} />
          </ListItem>
        )) }
      </List>
    </div>
  </Drawer>
);

export default LeftNav;
