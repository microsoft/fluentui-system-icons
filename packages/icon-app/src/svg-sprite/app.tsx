import * as React from 'react';

const Page1 = React.lazy(() =>
  import(
    /* webpackChunkName: "page-1", webpackPreload: true */
    './page-1'
  ).then((mod) => ({
    default: mod.Page1,
  })),
);
const Page2 = React.lazy(() =>
  import(
    /* webpackChunkName: "page-2", webpackPreload: true */
    './page-2'
  ).then((mod) => ({
    default: mod.Page2,
  })),
);

export function App() {

console.log('App rendered');
  return (
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Page1 />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Page2 />
      </React.Suspense>
    </main>
  );
}
