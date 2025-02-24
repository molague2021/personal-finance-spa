import { Grid2 } from '@mui/material';
import { Pots } from './components/Pots';

const Content = ({ type }: { type: string }) => {
  switch (type) {
    case 'pots':
      return <Pots />;

    case 'transactions':
      return <div>Transactions</div>;

    case 'budgets':
      return <div>Budgets</div>;

    case 'recurringBills':
      return <div>Recurring Bills</div>;

    default:
      return null;
  }
};

export const OverviewCardContent = ({ type }: { type: string }) => {
  return (
    <Grid2>
      <Content type={type} />
    </Grid2>
  );
};
