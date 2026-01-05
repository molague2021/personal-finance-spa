import {
  Menu,
  MenuItem,
  Select,
  styled,
  TextField,
  useTheme,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import data from '../../../data.json';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { ChangeEvent, useState } from 'react';

const StyledSelect = styled(Select)`
  & .MuiSelect-select {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0px;
    font-family:
      Public Sans,
      sans-serif;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0px;
    font-family:
      Public Sans,
      sans-serif;
  }
`;

const EnhancedTableHead = () => {
  const theme = useTheme();
  const [sortBy, setSortBy] = useState('latest');
  const [category, setCategory] = useState('allTransactions');

  return (
    <Grid2 width={'100%'} display="flex" justifyContent="space-between">
      <TextField
        placeholder="Search transaction"
        slotProps={{
          input: {
            endAdornment: (
              <SearchTwoToneIcon
                style={{ fill: `#201F24`, height: '13px', width: '13px' }}
              />
            ),
          },
        }}
        sx={{
          width: '320px',
          '& .MuiOutlinedInput-root': {
            height: '45px',
            lineHeight: '150%',
            fontSize: '14px',
            letterSpacing: '0px',
            fontFamily: 'Public Sans, sans-serif',
          },
        }}
      />
      <Grid2 display="flex" gap="24px">
        <Box display="flex" alignItems="center" gap="8px">
          <Typography variant="body2">Sort by</Typography>
          <StyledSelect
            value={sortBy}
            size="small"
            sx={{ height: '45px', minWidth: '132px' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSortBy(e.target.value)
            }
          >
            <StyledMenuItem value="latest">Latest</StyledMenuItem>
            <StyledMenuItem value="oldest">Oldest</StyledMenuItem>
            <StyledMenuItem value="amountHighToLow">A to Z</StyledMenuItem>
            <StyledMenuItem value="amountLowToHigh">Z to A</StyledMenuItem>
            <StyledMenuItem value="aToZ">Hightest</StyledMenuItem>
            <StyledMenuItem value="zToA">Lowest</StyledMenuItem>
          </StyledSelect>
        </Box>
        <Box display="flex" alignItems="center" gap="8px">
          <Typography variant="body2">Category</Typography>
          <StyledSelect
            value={category}
            size="small"
            sx={{ height: '45px', minWidth: '132px' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategory(e.target.value)
            }
          >
            <StyledMenuItem value="allTransactions">
              All Transactions
            </StyledMenuItem>
            <StyledMenuItem value="entertainment">Entertainment</StyledMenuItem>
            <StyledMenuItem value="bills">Bills</StyledMenuItem>
            <StyledMenuItem value="groceries">Groceries</StyledMenuItem>
            <StyledMenuItem value="diningOut">Dining Out</StyledMenuItem>
            <StyledMenuItem value="transportation">
              Transportation
            </StyledMenuItem>
            <StyledMenuItem value="personalCare">Personal Care</StyledMenuItem>
          </StyledSelect>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export const Transactions = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const transactionData = data.transactions;

  console.log({ transactionData });

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        padding: isMobile ? '24px 16px' : '32px 40px',
        overflowY: 'auto',
      }}
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <Typography variant="h1">Transactions</Typography>
      <Grid2
        container
        component={Paper}
        gap="24px"
        flexDirection="row"
        height={'100%'}
        width={'100%'}
        padding={'32px'}
      >
        <EnhancedTableHead />
        <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none' }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Recipient / Sender</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">TransactionDate</TableCell>
                  <TableCell align="left">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactionData.map((row, index) => (
                  <TableRow
                    key={`${row.name}-${index}`}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="name">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid2>
    </Box>
  );
};
