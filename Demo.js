import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// Import the CSS file
import './styles.css';

export default function ButtonAndCheckboxes() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <Button variant="contained">Ryan</Button>
      <Checkbox {...label} defaultChecked size="small" />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      {/* Add more components here */}
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: 'pink' }}>N</Avatar>
      <Avatar sx={{ bgcolor: 'black' }}>OP</Avatar>
      <Button variant="outlined">Outlined Button</Button>
      <Checkbox {...label} defaultChecked color="primary" />
      <Checkbox {...label} defaultChecked color="secondary" />
      {/* You can continue adding more components */}
    </div>
  );
}
