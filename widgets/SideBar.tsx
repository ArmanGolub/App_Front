import { memo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Drawer, DrawerProps, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { DRAWER_WIDTH, MENU } from '@/utils/constants';
import { Icon } from '@/components';
import theme from '@/theme';

export interface SideBarProps extends DrawerProps {}

const SideBar = (props: SideBarProps) => {
  const location = useLocation();

  return (
    <Drawer
      {...props}
      sx={{ width: DRAWER_WIDTH }}
      PaperProps={{ sx: { width: DRAWER_WIDTH, border: 'none' }, variant: 'elevation' }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ py: 6.25, px: 8.75 }}>
        <Box
          component="img"
          sx={{ objectFit: 'contain', maxWidth: '100%' }}
          src="/primary-logo.png"
          alt="primary-logo"
        />
      </Box>

      <List disablePadding sx={{ py: 5.25 }}>
        {MENU.map((menuItem) => {
          const { to, label, icon, divider } = menuItem;
          const selected = new RegExp(to).test(location.pathname);

          return (
            <ListItemButton
              key={label}
              component={RouterLink}
              divider={divider}
              to={to}
              sx={{
                px: 5,
                py: 2.5,
                borderRight: selected ? 4 : 0,
                borderColor: selected ? theme.palette.primary.main : null,
              }}
              selected={selected}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Icon name={icon} theme={selected ? 'primary' : 'text'} color={selected ? 'main' : 'disabled'} />
              </ListItemIcon>

              <ListItemText
                primaryTypographyProps={{ textTransform: 'uppercase', fontWeight: selected ? 700 : 400 }}
                primary={label}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};

export default memo(SideBar);
