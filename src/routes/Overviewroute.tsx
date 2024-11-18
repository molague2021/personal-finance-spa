import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { rootRoute } from '../App';
import { Overview } from '../containers/Overview/Overview';
import { createRoute, redirect } from '@tanstack/react-router';

export const overviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/overview',
  component: () => <Overview />,
});
