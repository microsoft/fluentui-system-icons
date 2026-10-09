import { Spinner } from '@fluentui/react-components';
import * as React from 'react';

const IconGrid = React.lazy(() => import('./ReactIconGrid').then((module) => ({ default: module.ReactIconGrid })));

export const ReactIconGridLazy: React.FunctionComponent = () => (
  <React.Suspense fallback={<Spinner label="Loading..." />}>
    <IconGrid />
  </React.Suspense>
);
