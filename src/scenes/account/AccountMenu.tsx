import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

interface AccountMenuProps {
  username: string;
  avatarSrc?: string;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ username, avatarSrc }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Perform any logout-related tasks here
    // Then navigate to the desired URL using window.location.assign
    window.location.assign('login.html');
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        {avatarSrc ? (
          <Avatar src={avatarSrc} alt={username} />
        ) : (
          <Avatar>{username.charAt(0)}</Avatar>
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem component={Link} to="/profile" onClick={handleCloseMenu}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/settings" onClick={handleCloseMenu}>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
