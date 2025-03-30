import {
  Avatar,
  Box,
  Divider,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import data from '../../../../data.json';

const currencyFormat = new Intl.NumberFormat('en-us', {
  currency: 'USD',
  style: 'currency',
});

export const Transactions = () => {
  const theme = useTheme();
  const transactionData = data.transactions;

  return (
    <Grid2 container maxHeight={399} gap="20px" sx={{ overflowY: 'auto' }}>
      {transactionData.map((transaction, index) => {
        const date = new Date(transaction.date);
        const year = date.getFullYear();
        const month = date.toLocaleDateString('en-US', {
          month: 'short',
        });
        const day = date.getDate();

        const amountString =
          transaction.amount > 0
            ? `+${currencyFormat.format(transaction.amount)}`
            : currencyFormat.format(transaction.amount);

        return (
          <>
            <Grid2
              display="flex"
              key={`${transaction.name}-${index}`}
              sx={{ width: '544px', height: '47px' }}
            >
              <Grid2
                display="flex"
                width={474}
                height={40}
                alignItems="center"
                gap="16px"
              >
                <Avatar src={transaction.avatar} />
                <Typography variant="body2" fontWeight={800}>
                  {transaction.name}
                </Typography>
              </Grid2>
              <Stack
                display="flex"
                width={70}
                height={47}
                whiteSpace="nowrap"
                justifyContent="center"
              >
                <Typography
                  variant="body2"
                  fontWeight={800}
                  color={
                    transaction.amount > 0
                      ? 'success.main'
                      : 'palette.grey[500]'
                  }
                >
                  {amountString}
                </Typography>

                <Typography
                  variant="caption"
                  color={theme.palette.grey[500]}
                >{`${day} ${month} ${year}`}</Typography>
              </Stack>
            </Grid2>
            {transactionData.length > 1 && (
              <Box sx={{ width: '544px' }}>
                <Divider
                  variant="fullWidth"
                  orientation="vertical"
                  sx={{
                    borderColor: theme.palette.grey[100],
                    borderBottomWidth: '1px',
                  }}
                />
              </Box>
            )}
          </>
        );
      })}
    </Grid2>
  );
};
