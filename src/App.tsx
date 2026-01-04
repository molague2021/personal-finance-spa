import { Sidebar } from './containers/Sidebar/Sidebar';
import {
  CssBaseline,
  Grid2,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { transactionRoute } from './routes/Transactionsroute';
import { overviewRoute } from './routes/Overviewroute';
import { signinRoute } from './routes/SignInroute';
import { defaultTheme } from './Theme/defaultTheme';
import { recurringBillsroute } from './routes/RecurringBillsroute';
import { potsRoute } from './routes/Potsroute';
import { budgetsRoute } from './routes/Budgetsroute';
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Sidebar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  transactionRoute,
  overviewRoute,
  signinRoute,
  potsRoute,
  recurringBillsroute,
  budgetsRoute,
]);

const router = createRouter({ routeTree });

export const App = () => {
  console.log(import.meta.env.VITE_APP_MY_KEY);
  const isTablet = useMediaQuery(defaultTheme.breakpoints.between('xs', 'md'));
  const isMobile = useMediaQuery(defaultTheme.breakpoints.down('xs'));
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid2
        display="flex"
        flexDirection={isTablet || isMobile ? 'column-reverse' : 'row'}
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <RouterProvider router={router} />
      </Grid2>
    </ThemeProvider>
  );
};
