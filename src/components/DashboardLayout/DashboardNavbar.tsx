import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {
  InputAdornment,
  TextField as MUITextfield,
  Stack,
  SvgIcon,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function DashboardNavbar(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonOutlineIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ padding: { md: "0px 100px", xs: "0px" } }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { md: "none", xs: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "block", sm: "block" },
              color: "white",
              fontSize: { md: "16px", xs: "12px" },
            }}
          >
            CyberGuard KeyHub
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "120px" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{
                padding: 0, // Remove padding
                "& .MuiIconButton-label": {
                  width: "100%", // Adjust label width to cover entire button
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { md: "block", xs: "block" } }} />

          <Box sx={{ display: { lg: "block", xs: "none", md: "block" } }}>
            <Box
              sx={{
                mr: "20px",
                width: "300px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                overflow: "hidden",
              }}
            >
              <MUITextfield
                fullWidth
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "white",
                  "& input::placeholder": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    "& input": {
                      padding: "8px 10px",

                      fontSize: "0.9rem",
                    },
                    "& fieldset": { border: "none" },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search....."
                variant="outlined"
              />
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack
              sx={{ display: "flex", flexDirection: "column", mr: "27px" }}
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{
                  padding: 0, // Remove padding
                  "& .MuiIconButton-label": {
                    width: "100%", // Adjust label width to cover entire button
                    display: "flex",
                    justifyContent: "center",
                  },
                }}
              >
                <PersonOutlineIcon />
              </IconButton>
              <Typography
                sx={{
                  fontFamily: "Assistant",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  marginTop: 0,
                }}
              >
                My Account
              </Typography>
            </Stack>
            <Stack
              sx={{ display: "flex", flexDirection: "column", mr: "27px" }}
            >
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{
                  padding: 0, // Remove padding
                  "& .MuiIconButton-label": {
                    width: "100%", // Adjust label width to cover entire button
                    display: "flex",
                    justifyContent: "center",
                  },
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Typography
                sx={{
                  fontFamily: "Assistant",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  marginTop: 0,
                }}
              >
                Wishlist
              </Typography>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{
                  padding: 0, // Remove padding
                  "& .MuiIconButton-label": {
                    width: "100%", // Adjust label width to cover entire button
                    display: "flex",
                    justifyContent: "center",
                  },
                }}
              >
                <ShoppingCartCheckoutIcon />
              </IconButton>
              <Typography
                sx={{
                  fontFamily: "Assistant",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  marginTop: 0,
                }}
              >
                Cart
              </Typography>
            </Stack>
          </Box>
        </Toolbar>

        <Box
          sx={{
            ml: "20px",
            mb: "10px",
            display: { lg: "none", xs: "block", md: "none" },
          }}
        >
          <Box
            sx={{
              width: "300px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              overflow: "hidden",
            }}
          >
            <MUITextfield
              fullWidth
              sx={{
                borderRadius: "25px",
                backgroundColor: "white",
                "& input::placeholder": {
                  fontSize: "12px",
                },
              }}
              InputProps={{
                sx: {
                  "& input": {
                    padding: "8px 10px",

                    fontSize: "0.9rem",
                  },
                  "& fieldset": { border: "none" },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search....."
              variant="outlined"
            />
          </Box>
        </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default { DashboardNavbar };
