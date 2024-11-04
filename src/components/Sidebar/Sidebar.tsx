import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, Grid2, MenuItem, MenuList, Typography } from '@mui/material';
import logoLarge from '../../../assets/images/logo-large.svg';
import homeIcon from '../../../assets/images/icon-nav-overview.svg';
import transationIcon from '../../../assets/images/icon-nav-transactions.svg';
import budgetIcon from '../../../assets/images/icon-nav-budgets.svg';
import potsIcon from '../../../assets/images/icon-nav-pots.svg';
import minimizeIcon from '../../../assets/images/icon-minimize-menu.svg';
import { OverviewIcon } from '../../icons/OverviewIcon';
import { TransactionIcon } from '../../icons/TransactionIcon';
import { BudgetIcon } from '../../icons/BudgetIcon';
import { PotsIcon } from '../../icons/PotsIcon';
import { RecurringBills } from '../../icons/RecurringBills';
import { Link } from '@tanstack/react-router';

const navMenu = [
  {
    title: 'Overview',
    url: 'overview',
    icon: (isSelected: boolean) => (
      <OverviewIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Transactions',
    url: 'transactions',
    icon: (isSelected: boolean) => (
      <TransactionIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Budgets',
    url: 'budgets',
    icon: (isSelected: boolean) => (
      <BudgetIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Pots',
    url: 'pots',
    icon: (isSelected: boolean) => (
      <PotsIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Recurring Bills',
    url: 'recurringBills',
    icon: (isSelected: boolean) => (
      <RecurringBills fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
];

export const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box sx={{ width: '300px' }}>
      <Drawer
        sx={{
          maxWidth: '300px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            maxWidth: '300px',
            boxSizing: 'border-box',
            backgroundColor: '#201F24',
            gap: '16px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Grid2
          display="flex"
          sx={{ width: '100%', height: '102px', padding: '40px 32px' }}
        >
          <img src={logoLarge} style={{ height: '22px' }} />
        </Grid2>
        <MenuList
          // variant="selectedMenu"
          disablePadding
          sx={{ width: '300px', height: '100%' }}
        >
          {navMenu.map((menu, index) => (
            <Link to={`/${menu.url}`}>
              <MenuItem
                sx={{
                  paddingLeft: '24px',
                  gap: '16px',
                  width: '276px',
                  height: '56px',
                  borderTopRightRadius: selectedIndex === index && '10px',
                  borderBottomRightRadius: selectedIndex === index && '10px',
                  backgroundColor:
                    selectedIndex === index && 'white !important',
                  [`.MuiTypography-root`]: {
                    color: selectedIndex === index && '#201F24 !important',
                  },
                  borderLeft:
                    selectedIndex === index
                      ? '4px solid #277C78'
                      : '4px solid #201F24',
                  '&:hover': {
                    [`.MuiTypography-root`]: {
                      color: selectedIndex !== index && '#F2F2F2 !important',
                    },
                  },
                }}
                selected={selectedIndex === index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <Box
                  minWidth="24px"
                  minHeight="24px"
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  {menu.icon(selectedIndex === index)}
                </Box>

                <Typography
                  sx={{
                    width: '100%',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0px',
                    color: '#B3B3B3',
                  }}
                >
                  {menu.title}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
        <Grid2 display="flex" sx={{ width: '100%', height: '130px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'inherit',
              height: '56px',
              padding: '16px 32px',
            }}
          >
            <Grid2 display="flex" gap="16px">
              <img src={minimizeIcon} style={{ height: '22px' }} />
              <Typography
                textAlign="start"
                sx={{ width: '300px', height: '16px' }}
                color="#B3B3B3"
              >
                Minimize Menu
              </Typography>
            </Grid2>
          </Button>
        </Grid2>
      </Drawer>
    </Box>
  );
};