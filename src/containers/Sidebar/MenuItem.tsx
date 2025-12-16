import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useLocation } from '@tanstack/react-router';

export const NavItem = ({ menu, expand }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const pathname = useLocation({
    select: (location) => {
      return location.pathname;
    },
  });
  return (
    <>
      {(isTablet || isMobile) && (
        <MenuItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: isMobile ? '68.6px' : '104px',
            height: '66px',
            paddingTop: '8px',
            paddingBottom: '12px',
            borderTopRightRadius: pathname === menu.url ? '10px' : '',
            borderTopLeftRadius: pathname === menu.url ? '10px' : '',
            backgroundColor: pathname === menu.url ? 'white !important' : '',
            [`.MuiTypography-root`]: {
              color: pathname === menu.url ? '#201F24 !important' : '',
            },
            borderBottom:
              pathname === menu.url ? '4px solid #277C78' : '4px solid #201F24',
            '&:hover': {
              [`.MuiTypography-root`]: {
                color: pathname !== menu.url ? '#F2F2F2 !important' : '',
              },
            },
          }}
          selected={pathname === menu.url}
        >
          <Box
            minWidth="24px"
            minHeight="24px"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {menu.icon(pathname === menu.url)}
          </Box>
          {isTablet && (
            <Typography variant="caption" fontWeight={800} color="#B3B3B3">
              {menu.title}
            </Typography>
          )}
        </MenuItem>
      )}
      {!isMobile && !isTablet && (
        <MenuItem
          sx={{
            paddingLeft: '24px',
            gap: '16px',
            width: expand ? '276px' : '74px',
            height: '56px',
            borderTopRightRadius: pathname === menu.url ? '10px' : '',
            borderBottomRightRadius: pathname === menu.url ? '10px' : '',
            backgroundColor: pathname === menu.url ? 'white !important' : '',
            [`.MuiTypography-root`]: {
              color: pathname === menu.url ? '#201F24 !important' : '',
            },
            borderLeft:
              pathname === menu.url ? '4px solid #277C78' : '4px solid #201F24',
            '&:hover': {
              [`.MuiTypography-root`]: {
                color: pathname !== menu.url ? '#F2F2F2 !important' : '',
              },
            },
          }}
          selected={pathname === menu.url}
        >
          <Box
            minWidth="24px"
            minHeight="24px"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {menu.icon(pathname === menu.url)}
          </Box>
          {expand && (
            <Typography variant="h3" color="#B3B3B3">
              {menu.title}
            </Typography>
          )}
        </MenuItem>
      )}
    </>
  );
};
