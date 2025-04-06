import { useMediaQuery, useTheme } from '@mui/material';
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

  if (!isTablet && !isMobile) {
    return (
      <Box sx={{ width: expand ? '300px' : '85px' }}>
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
      </Box>
    );
  }
};
