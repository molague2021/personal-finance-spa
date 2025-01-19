import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { rootRoute } from '../App';
import { Overview } from '../containers/Overview/Overview';
import { createRoute, redirect } from '@tanstack/react-router';
import { Pots } from '../containers/Pots/Pots';
import { Budgets } from '../containers/Budgets/Budgets';

export const potsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pots',
  component: () => <Pots />,
});
