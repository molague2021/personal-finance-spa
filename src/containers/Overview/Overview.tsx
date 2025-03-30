import { db } from '../../../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import data from '../../../data.json';
import { Card, Grid2, Typography, useTheme } from '@mui/material';
import { OverviewCard } from '../../components/OverviewCard/OverviewCard';

const financeOptions = [
  {
    title: 'Pots',
    type: 'pots',
    link: '/',
  },
  {
    title: 'Transactions',
    type: 'transactions',
    link: '/',
  },
  {
    title: 'Budgets',
    type: 'budgets',
    link: '/',
  },
  {
    title: 'Recurring Bills',
    type: 'recurringBills',
    link: '/',
  },
];

const currencyFormat = new Intl.NumberFormat('en-us', {
  currency: 'USD',
  style: 'currency',
});

export const Overview = () => {
  const theme = useTheme();
  console.log({ theme });
  // useAuthStatus();

  // const cardSubtitle = ['Current Balance', 'Income', 'Expenses'];
  // const fetchTransations = async () => {
  //   try {
  //     const transactionRef = collection(db, 'transactions');

  //     const auth = getAuth();

  //     const q = query(transactionRef);

  //     const querySnap = await getDocs(q);

  //     console.log({ auth }, { querySnap });
  //     querySnap.forEach((doc) => {
  //       console.log({ doc }, doc.data());
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const cardSubtitle = Object.keys(data.balance);

  // useEffect(() => {
  //   fetchTransations();
  // }, []);

  const leftSide = financeOptions.slice(0, 2);
  const rightSide = financeOptions.slice(2, 4);

  console.log({ leftSide }, { rightSide });

  return (
    <Grid2
      sx={{
        width: '100%',
        padding: '32px 40px',
        backgroundColor: theme.palette.beige.A100,
      }}
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <Typography variant="h1">Overview</Typography>
      <Grid2 display="flex" gap="24px">
        {cardSubtitle.map((subtitle, index) => {
          const subtitles = ['Current Balance', 'Income', 'Expenses'];
          const balance = data.balance[subtitle];
          return (
            <Card
              sx={{
                width: '337px',
                height: '119px',
                backgroundColor:
                  subtitle === 'current'
                    ? theme.palette.grey[900]
                    : theme.palette.background.paper,
                boxShadow: 'none',
              }}
            >
              <Grid2
                display="flex"
                padding="24px"
                gap="12px"
                flexDirection="column"
              >
                <Typography
                  variant="subtitle3"
                  color={
                    subtitle === 'current'
                      ? theme.palette.background.paper
                      : theme.palette.grey[900]
                  }
                >
                  {subtitles[index]}
                </Typography>
                <Typography
                  variant="h1"
                  color={
                    subtitle === 'current'
                      ? theme.palette.background.paper
                      : theme.palette.grey[900]
                  }
                >{`${currencyFormat.format(balance)}`}</Typography>
              </Grid2>
            </Card>
          );
        })}
      </Grid2>
      <Grid2 display="flex" gap="24px">
        <Grid2
          display="flex"
          gap="24px"
          flexDirection="column"
          sx={{ width: '608px' }}
        >
          {leftSide.map((option) => (
            <OverviewCard option={option} />
          ))}
        </Grid2>
        <Grid2
          display="flex"
          gap="24px"
          flexDirection="column"
          sx={{ width: '428px' }}
        >
          {rightSide.map((option) => (
            <OverviewCard option={option} />
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};
