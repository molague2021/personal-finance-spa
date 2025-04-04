import { Grid2 } from '@mui/material';
import { Pots } from './components/Pots';
import { Transactions } from './components/Transactions';
import { BudgetsOverview } from './components/BudgetsOverview';
import { RecurringBillsOverview } from './components/RecurringBillsOverview';

const Content = ({ type }: { type: string }) => {
  switch (type) {
    case 'pots':
      return <Pots />;

    case 'transactions':
      return <Transactions />;

    case 'budgets':
      return <BudgetsOverview />;

    case 'recurringBills':
      return <RecurringBillsOverview />;

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
