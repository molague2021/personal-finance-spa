import {
  Box,
  Divider,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import data from '../../../../data.json';
import { palette } from 'Theme/palette';

export const RecurringBillsOverview = () => {
  const theme = useTheme();
  const transactionData = data;

  console.log({ transactionData });
  return (
    <Stack sx={{ width: '364px', maxHeight: '207px' }} gap="12px">
      <Grid2
        sx={{
          height: '61px',
          width: '100%',
          backgroundColor: theme.palette.beige.A100,
          borderRadius: '8px',
          borderLeft: `4px solid ${theme.palette.green[90]}`,
          padding: '0 16px',
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitle3" color={theme.palette.grey[500]}>
          Paid Bills
        </Typography>
        <Typography
          variant="subtitle3"
          fontWeight={800}
          color={theme.palette.grey[900]}
        >
          $190.00
        </Typography>
      </Grid2>
      <Grid2
        sx={{
          height: '61px',
          width: '100%',
          backgroundColor: theme.palette.beige.A100,
          borderRadius: '8px',
          borderLeft: `4px solid ${theme.palette.yellow[100]}`,
          padding: '0 16px',
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitle3" color={theme.palette.grey[500]}>
          Total Upcoming
        </Typography>
        <Typography
          variant="subtitle3"
          fontWeight={800}
          color={theme.palette.grey[900]}
        >
          $198.98
        </Typography>
      </Grid2>
      <Grid2
        sx={{
          height: '61px',
          width: '100%',
          backgroundColor: theme.palette.beige.A100,
          borderRadius: '8px',
          borderLeft: `4px solid ${theme.palette.cyan[100]}`,
          padding: '0 16px',
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="subtitle3" color={theme.palette.grey[500]}>
          Paid Bills
        </Typography>
        <Typography
          variant="subtitle3"
          fontWeight={800}
          color={theme.palette.grey[900]}
        >
          $59.98
        </Typography>
      </Grid2>
    </Stack>
  );
};
