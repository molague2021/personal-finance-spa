import { rootRoute } from '../App';
import { Overview } from '../containers/Overview/Overview';
import { createRoute } from '@tanstack/react-router';
import SignIn from '../containers/SignIn';

export const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signin',
  component: () => <SignIn />,
});
