import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { rootRoute } from '../App';
import { Overview } from '../containers/Overview/Overview';
import { createRoute, redirect } from '@tanstack/react-router';
import { Budgets } from '../containers/Budgets/Budgets';

export const budgetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/budgets',
  component: () => <Budgets />,
});
