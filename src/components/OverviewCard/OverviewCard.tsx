import { Box, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Link } from '@tanstack/react-router';
import React, { ReactNode } from 'react';
import caretRight from '../../../assets/images/icon-caret-right.svg';
import { OverviewCardContent } from './OverviewCardContent';

export const OverviewCard = ({
  option,
}: {
  option: { title: string; type: string; link: string };
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        padding: '32px',
        width: '100%',
        height: '119px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'none',
      }}
    >
      <Grid2 display="flex" justifyContent="space-between">
        <Typography variant="h2">{option.title}</Typography>
        <Link
          style={{
            color: theme.palette.grey[500],
            textDecoration: 'none',
            display: 'flex',
            width: '98px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle3">See Details</Typography>
          <Box sx={{ width: '12px', height: '12px', alignContent: 'center' }}>
            <img src={caretRight} style={{ width: '5px', height: '8px' }} />
          </Box>
        </Link>
      </Grid2>
      <OverviewCardContent type={option.type} />
    </Card>
  );
};
