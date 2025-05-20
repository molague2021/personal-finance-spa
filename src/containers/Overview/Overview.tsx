import data from '../../../data.json';
import { Box, Grid2, Typography, useMediaQuery, useTheme } from '@mui/material';
import { OverviewCard } from '../OverviewCard/OverviewCard';

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

export const currencyFormat = new Intl.NumberFormat('en-us', {
  currency: 'USD',
  style: 'currency',
});

export const Overview = () => {
  const theme = useTheme();
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

  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box
      sx={{
        height: '100%',
        padding: '32px 40px',
        overflowY: 'auto',
      }}
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <Typography variant="h1">Overview</Typography>
      <Grid2
        container
        gap="24px"
        flexDirection="column"
        maxHeight={() => {
          if (isMobile) {
            return '100%';
          }
          return '119px';
        }}
      >
        {cardSubtitle.map((subtitle, index) => {
          const subtitles = ['Current Balance', 'Income', 'Expenses'];
          const balance = data.balance[subtitle];
          return (
            <Grid2
              width={() => {
                if (isTablet) {
                  return '213px';
                }

                if (isMobile) {
                  return '343px';
                }
                return '337px';
              }}
              sx={{
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
            </Grid2>
          );
        })}
      </Grid2>
      <Grid2
        container
        flexDirection="column"
        display="flex"
        gap="24px"
        maxWidth="1060px"
        height={{
          md: '761px',
          lg: '761px',
          xl: '761px',
        }}
      >
        {financeOptions.map((option) => (
          <OverviewCard option={option} />
        ))}
      </Grid2>
    </Box>
  );
};
