import { rootRoute } from '../App';
import { Overview } from '../containers/Overview/Overview';
import { createRoute } from '@tanstack/react-router';

export const overviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/overview',
  component: () => <Overview />,
});
