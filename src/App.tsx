import React, { Suspense } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CssBaseline, Grid2, ThemeProvider } from '@mui/material';
// Import the generated route tree
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
  redirect,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { transactionRoute } from './routes/Transactionsroute';
import { overviewRoute } from './routes/Overviewroute';
import { signinRoute } from './routes/SignInroute';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { defaultTheme } from './Theme/defaultTheme';

// const TanStackRouterDevtools =
//   process.env.NODE_ENV === 'production'
//     ? () => null // Render nothing in production
//     : React.lazy(() =>
//         // Lazy load in development
//         import('@tanstack/router-devtools').then((res) => ({
//           default: res.TanStackRouterDevtools,
//           // For Embedded Mode
//           // default: res.TanStackRouterDevtoolsPanel
//         }))
//       );

// // Register the router instance for type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router;
//   }
// }

// const router = createRouter({
//   routeTree,
//   // defaultPendingComponent: () => (
//   //   <div className={`p-2 text-2xl`}>
//   //     <Spinner />
//   //   </div>
//   // ),
//   defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
//   context: {
//     auth: undefined!, // We'll inject this when we render
//     queryClient,
//   },
//   defaultPreload: 'intent',
//   // Since we're using React Query, we don't want loader calls to ever be stale
//   // This will ensure that the loader is always called when the route is preloaded or visited
//   defaultPreloadStaleTime: 0,
// });
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
]);

const router = createRouter({ routeTree });

export const App = () => {
  console.log(import.meta.env.VITE_APP_MY_KEY);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid2 display="flex" sx={{ width: '100%', height: '100%' }}>
        <RouterProvider router={router} />
        {/* <Sidebar />
      <Grid2>Hello, personal finance app!</Grid2> */}
        {/* <Suspense>
        <TanStackRouterDevtools />
        </Suspense> */}
      </Grid2>
    </ThemeProvider>
  );
};
