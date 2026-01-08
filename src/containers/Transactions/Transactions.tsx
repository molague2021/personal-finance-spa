import {
  Button,
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
import { ChangeEvent, useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { LeftArrowIcon } from 'icons/LeftArrowIcon';
import { RightArrowIcon } from 'icons/RightArrowIcon';

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

const sortByList = [
  { id: 'date', value: 'latest', name: 'Latest', desc: true },
  { id: 'date', value: 'oldest', name: 'Oldest', desc: false },
  { id: 'senderReceiver', value: 'amountAToZ', name: 'A to Z', desc: false },
  { id: 'senderReceiver', value: 'amountZToA', name: 'Z to A', desc: true },
  { id: 'amount', value: 'highest', name: 'Highest', desc: true },
  { id: 'amount', value: 'lowest', name: 'Lowest', desc: false },
];

const categoryList = [
  {
    id: 'category',
    value: 'All Transactions',
    displayName: 'All Transactions',
  },
  {
    id: 'category',
    value: 'Entertainment',
    displayName: 'Entertainment',
  },
  {
    id: 'category',
    value: 'Bills',
    displayName: 'Bills',
  },
  {
    id: 'category',
    value: 'Groceries',
    displayName: 'Groceries',
  },
  {
    id: 'category',
    value: 'Dining Out',
    displayName: 'Dining Out',
  },
  {
    id: 'category',
    value: 'Transportation',
    displayName: 'Transportation',
  },
  {
    id: 'category',
    value: 'Personal Care',
    displayName: 'Personal Care',
  },
];

const EnhancedTableHead = ({
  sorting,
  setSorting,
  columnFilters,
  setColumnFilters,
}: {
  sorting: SortingState;
  setSorting: (value: SortingState) => void;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (value: ColumnFiltersState) => void;
}) => {
  const sortBy = sortByList.find((sort) =>
    sorting.some((s) => s.id === sort.id && s.desc === sort.desc)
  )?.value;

  const category =
    categoryList.find((category) =>
      columnFilters.some((column) => column.value === category.value)
    )?.value ?? 'All Transactions';

  const handleSortByCriteria = (value: string) => {
    const selectedSortOption = sortByList.find(
      (option) => option.value === value
    );

    if (!selectedSortOption) return;

    const filteredList = sorting.filter(
      (sort) => !sortByList.some((s) => s.id === sort.id)
    );

    filteredList.push({
      id: selectedSortOption?.id,
      desc: selectedSortOption?.desc,
    });

    setSorting(filteredList);
  };

  const handleCategoryChange = (categoryValue: string) => {
    const filteredList = columnFilters.filter(
      (cat) => !categoryList.some((c) => c.id === cat.id)
    );

    console.log({ categoryValue });

    filteredList.push({
      id: 'category',
      value: categoryValue === 'All Transactions' ? '' : categoryValue,
    });

    setColumnFilters(filteredList);
  };

  return (
    <Grid2
      width={'100%'}
      maxHeight="45px"
      display="flex"
      justifyContent="space-between"
    >
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
              handleSortByCriteria(e.target.value)
            }
          >
            {sortByList.map((sortOption) => (
              <StyledMenuItem key={sortOption.value} value={sortOption.value}>
                {sortOption.name}
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </Box>
        <Box display="flex" alignItems="center" gap="8px">
          <Typography variant="body2">Category</Typography>
          <StyledSelect
            value={category}
            size="small"
            sx={{ height: '45px', minWidth: '132px' }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCategoryChange(e.target.value)
            }
          >
            {categoryList.map((cat) => (
              <StyledMenuItem key={cat.value} value={cat.value}>
                {cat.displayName}
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </Box>
      </Grid2>
    </Grid2>
  );
};

const columnsDef: ColumnDef<
  {
    senderReceiver: {
      name: string;
      avatar: string;
    };
    date: string;
    category: string;
    amount: number;
  },
  string
>[] = [
  {
    id: 'senderReceiver',
    header: 'Recipient / Sender',
    accessorFn: (row: any) => row.senderReceiver.name,
    cell: (info) => {
      const { name, avatar } = info.row.original.senderReceiver;
      return (
        <Box display="flex" alignItems="center" gap="12px">
          <img
            src={avatar}
            alt={name}
            style={{ width: '32px', height: '32px', borderRadius: '50%' }}
          />
          <Typography variant="body2">{name}</Typography>
        </Box>
      );
    },
  },
  {
    id: 'category',
    header: 'Category',
    accessorKey: 'category',
    cell: (info) => {
      console.log(info.getValue());
      return <Typography variant="body2">{info.getValue()}</Typography>;
    },
  },
  {
    id: 'date',
    header: 'Transaction Date',
    accessorKey: 'date',
    cell: (info) => {
      const date = new Date(info.getValue());
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      return <Typography variant="body2">{formattedDate}</Typography>;
    },
  },
  {
    id: 'amount',
    header: 'Amount',
    accessorKey: 'amount',
    cell: (info) => {
      return (
        <Typography variant="body2" fontWeight={800}>
          ${info.getValue()}
        </Typography>
      );
    },
  },
];

export const Transactions = () => {
  const theme = useTheme();
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'date', desc: true },
  ]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    { id: 'category', value: '' },
  ]);
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const transactionData = useMemo(
    () =>
      data.transactions.map((transaction) => ({
        senderReceiver: {
          name: transaction.name,
          avatar: transaction.avatar,
        },
        date: transaction.date,
        category: transaction.category,
        amount: transaction.amount,
      })),
    [data.transactions]
  );

  // console.log({ transactionData });

  const table = useReactTable({
    data: transactionData,
    columns: columnsDef,
    state: {
      sorting,
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    rowCount: 5,
  });

  // console.log({ table });

  const flatHeaders = table.getFlatHeaders();

  // console.log({ flatHeaders });

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
        <EnhancedTableHead
          sorting={sorting}
          setSorting={setSorting}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <Paper sx={{ width: '100%', boxShadow: 'none' }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {table.getFlatHeaders().map((header) => {
                    const headerContent = header.column.columnDef.header;
                    return (
                      <TableCell key={header.id}>
                        <Typography
                          variant="caption"
                          color={theme.palette.grey[500]}
                        >
                          {flexRender(headerContent, header.getContext())}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {table.getRowModel().rows.map((row) => {
                  return (
                    <TableRow
                      key={row.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      {row.getVisibleCells().map((cell) => {
                        const cellContent = cell.column.columnDef.cell;
                        return (
                          <TableCell key={cell.id}>
                            {flexRender(cellContent, cell.getContext())}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid2
            display="flex"
            alignItems="flex-end"
            height="64px"
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.grey[500],
                borderColor: theme.palette.grey[900],
                height: '40px',
                width: '93px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
              onClick={() => table.previousPage()}
            >
              <LeftArrowIcon fill={theme.palette.grey[500]} />
              <Typography variant="body2">Prev</Typography>
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: theme.palette.grey[500],
                borderColor: theme.palette.grey[900],
                height: '40px',
                width: '93px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
              onClick={() => table.nextPage()}
            >
              <Typography variant="body2">Next</Typography>
              <RightArrowIcon fill={theme.palette.grey[500]} />
            </Button>
          </Grid2>
        </Paper>
      </Grid2>
    </Box>
  );
};
