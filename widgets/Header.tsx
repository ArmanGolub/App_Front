import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Tooltip,
  alpha,
  BoxProps,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

import { useAuth, useTitle } from '@/providers';
import { Icon } from '@/components';
import { HEADER_HEIGHT } from '@/utils/constants';
import theme from '@/theme';

export interface HeaderProps extends BoxProps {}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  const { title, canGoBack } = useTitle({});

  return (
    <Box
      {...props}
      sx={{
        position: 'sticky',
        top: 0,
        height: HEADER_HEIGHT,
        bgcolor: alpha(theme.palette.background.default, 0.8),
        backdropFilter: 'blur(100px)',
        zIndex: zIndex.appBar,
        boxShadow: theme.shadows[2],
      }}
    >
      <Container sx={{ py: 2.5, px: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
          {canGoBack && (
            <Tooltip title="Назад">
              <IconButton aria-label="Назад" onClick={() => navigate(-1)}>
                <Icon name="ArrowLeft" />
              </IconButton>
            </Tooltip>
          )}

          <Typography variant="h1" component="h1">
            {title}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={6} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Поиск">
              <IconButton aria-label="Поиск" onClick={() => {}}>
                <Icon name="Search" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Уведомления">
              <IconButton aria-label="Уведомления" onClick={() => {}}>
                <Icon name="Bell" />
              </IconButton>
            </Tooltip>
          </Stack>

          <UserAvatar />
        </Stack>
      </Container>
    </Box>
  );
};

const UserAvatar = () => {
  const { logout, isLoading } = useAuth();

  const [menuAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();

    await logout();
  };

  return (
    <>
      <IconButton
        aria-label="Avatar"
        size="small"
        id="avatar-button"
        aria-controls={open ? 'avatar-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar />
      </IconButton>

      <Menu
        id="avatar-menu"
        anchorEl={menuAnchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ 'aria-labelledby': 'avatar-button' }}
      >
        <MenuItem onClick={handleLogout} disabled={isLoading}>
          <ListItemIcon sx={{ fill: theme.palette.error.main }}>
            <Icon name="ArrowLeft" />
          </ListItemIcon>

          <ListItemText>Выйти</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default memo(Header);
