import { TextField, useTheme } from '@mui/material';
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
import SearchIcon from '@mui/icons-material/Search';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data
//   ) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }

const EnhancedTableHead = () => {
  const theme = useTheme();
  // const {
  //   onSelectAllClick,
  //   order,
  //   orderBy,
  //   numSelected,
  //   rowCount,
  //   onRequestSort,
  // } = props;
  // const createSortHandler =
  //   (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
  //     onRequestSort(event, property);
  //   };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        <TableCell>
          <TextField
            placeholder="Search transaction"
            slotProps={{
              input: {
                endAdornment: <SearchTwoToneIcon />,
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
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export const Transactions = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  // const colDefs = [
  //   { field: 'name' },
  //   { field: 'date' },
  //   { field: 'category' },
  //   { field: 'amount' },
  // ];

  // const colDefs = [
  //   { headerName: 'Name', field: 'name', sortable: true, filter: true },
  //   { headerName: 'Date', field: 'date', sortable: true, filter: true },
  //   { headerName: 'Category', field: 'category', sortable: true, filter: true },
  //   { headerName: 'Amount', field: 'amount', sortable: true, filter: true },
  // ];

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
        gap="24px"
        flexDirection="column"
        height={'100%'}
        width={'100%'}
      >
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableHead />
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
                {transactionData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
      {/* <Grid2
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
     
      </Grid2> */}
    </Box>
  );
};
