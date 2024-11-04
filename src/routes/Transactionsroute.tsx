import { rootRoute } from '../App';
import { Transactions } from '../containers/Transactions/Transactions';
import { createRoute } from '@tanstack/react-router';

export const transactionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/transactions',
  component: () => <Transactions />,
});
