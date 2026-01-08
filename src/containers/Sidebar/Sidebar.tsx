import { useState } from 'react';
import {
  Button,
  Grid2,
  MenuList,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import logoLarge from '/public/assets/images/logo-large.svg';
import logoSmall from '/public/assets/images/logo-small.svg';
import minimizeIcon from '/public/assets/images/icon-minimize-menu.svg';

import { OverviewIcon } from '../../icons/OverviewIcon';
import { TransactionIcon } from '../../icons/TransactionIcon';
import { BudgetIcon } from '../../icons/BudgetIcon';
import { PotsIcon } from '../../icons/PotsIcon';
import { RecurringBills } from '../../icons/RecurringBills';
import { Link } from '@tanstack/react-router';
import { MenuDrawer } from 'components/MenuDrawer/MenuDrawer';
import { NavItem } from './MenuItem';

const navMenu = [
  {
    title: 'Overview',
    url: '/overview',
    icon: (isSelected: boolean) => (
      <OverviewIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Transactions',
    url: '/transactions',
    icon: (isSelected: boolean) => (
      <TransactionIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Budgets',
    url: '/budgets',
    icon: (isSelected: boolean) => (
      <BudgetIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Pots',
    url: '/pots',
    icon: (isSelected: boolean) => (
      <PotsIcon fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
  {
    title: 'Recurring Bills',
    url: '/recurring-bills',
    icon: (isSelected: boolean) => (
      <RecurringBills fill={isSelected ? '#277C78' : '#B3B3B3'} />
    ),
  },
];

export const Sidebar = () => {
  const [expand, setExpand] = useState(true);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <MenuDrawer expand={expand}>
      {!isTablet && !isMobile && (
        <Grid2
          display="flex"
          sx={{ width: '100%', height: '102px', padding: '40px 32px' }}
        >
          <img
            src={expand ? logoLarge : logoSmall}
            style={{ height: '22px' }}
          />
        </Grid2>
      )}
      <MenuList
        disablePadding
        sx={{
          display: 'flex',
          justifyContent: isMobile || isTablet ? 'center' : null,
          placeContent: isMobile || isTablet ? 'space-between' : null,
          alignItems: isMobile || isTablet ? 'center' : null,
          flexDirection: isMobile || isTablet ? 'row' : 'column',
          width: () => {
            if (isTablet || isMobile) {
              return '100%';
            }
            return expand ? '300px' : '85px';
          },
          height: () => {
            if (isTablet || isMobile) {
              return '74px';
            }
            return '100%';
          },
        }}
      >
        {navMenu.map((menu) => (
          <Link
            key={menu.title}
            to={`${menu.url}`}
            style={{ textDecoration: 'none' }}
          >
            <NavItem menu={menu} expand={expand} />
          </Link>
        ))}
      </MenuList>
      {!isMobile && !isTablet && (
        <Grid2 display="flex" sx={{ width: '100%', height: '130px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'inherit',
              height: '56px',
              padding: '16px 32px',
            }}
            onClick={() => setExpand((prev) => !prev)}
          >
            <Grid2 display="flex" gap="16px">
              <img
                src={minimizeIcon}
                style={{
                  height: '22px',
                  transform: expand ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: '.4s tranform ease',
                }}
              />
              {expand && (
                <Typography
                  variant="h3"
                  textAlign="start"
                  sx={{ width: '300px', height: '16px' }}
                  color="#B3B3B3"
                >
                  Minimize Menu
                </Typography>
              )}
            </Grid2>
          </Button>
        </Grid2>
      )}
    </MenuDrawer>
  );
};
