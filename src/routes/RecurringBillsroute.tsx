import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { rootRoute } from '../App';
import { Overview } from '../containers/Overview/Overview';
import { createRoute, redirect } from '@tanstack/react-router';
import { RecurringBills } from '../containers/RecurringBills/RecurringBills';

export const recurringBillsroute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/recurring-bills',
  component: () => <RecurringBills />,
});
