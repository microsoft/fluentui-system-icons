import * as React from 'react';

const Page1 = React.lazy(() =>
  import(
    /* webpackChunkName: "svg-sprites-api-page-1", webpackPreload: true */
    './svg-sprites-api.example'
  ).then((mod) => ({
    default: mod.SvgSpritesApiExamples,
  })),
);
const Page2 = React.lazy(() =>
  import(
    /* webpackChunkName: "svg-sprites-api-page-2", webpackPreload: true */
    './svg-sprites-api.page-2.example'
  ).then((mod) => ({
    default: mod.SvgSpritesApiExamples2,
  })),
);

export function App() {
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
