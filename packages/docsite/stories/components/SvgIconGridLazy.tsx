import { Spinner } from '@fluentui/react-components';
import * as React from 'react';

const IconGrid = React.lazy(() => import('./SvgIconGrid').then((module) => ({ default: module.SvgIconGrid })));

export const SvgIconGridLazy: React.FunctionComponent = () => (
  <React.Suspense fallback={<Spinner label="Loading SVG catalogue..." />}>
    <IconGrid />
  </React.Suspense>
);
