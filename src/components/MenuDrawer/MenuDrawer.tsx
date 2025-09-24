import { Grid2, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { ReactNode, useState } from 'react';

export const MenuDrawer = ({
  children,
  expand,
}: {
  children: ReactNode;
  expand: boolean;
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  console.log({ isTablet }, { isMobile });

  const DrawerComponent = () => {
    switch (true) {
      case isTablet || isMobile:
        return (
          <Drawer
            sx={{
              width: '100%',
              height: '74px',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                maxWidth: '100%',
                boxSizing: 'border-box',
                backgroundColor: '#201F24',
                borderTopRightRadius: '15px',
                borderTopLeftRadius: '15px',
                gap: '16px',
              },
            }}
            variant="permanent"
            anchor="bottom"
          >
            {children}
          </Drawer>
        );
      case !isMobile && !isTablet:
        return (
          <Drawer
            sx={{
              width: expand ? '300px' : '85px',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                maxWidth: '300px',
                boxSizing: 'border-box',
                backgroundColor: '#201F24',
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px',
                gap: '16px',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            {children}
          </Drawer>
        );
      default:
        return null;
    }
  };
  return (
    <Box
      display="flex"
      minWidth={{
        xs: '100%',
        sm: '100%',
        md: expand ? '300px' : '85px',
        lg: expand ? '300px' : '85px',
        xl: expand ? '300px' : '85px',
      }}
      maxHeight={{
        xs: '74px',
        sm: '74px',
        md: '100%',
        lg: '100%',
        xl: '100%',
      }}
    >
      <DrawerComponent />
    </Box>
  );
};
