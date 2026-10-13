import { Spinner } from '@fluentui/react-components';
import * as React from 'react';

const FileTypeIconGrid = React.lazy(() =>
  import('./FileTypeIconGrid').then((module) => ({ default: module.FileTypeIconGrid })),
);

export const FileTypeIconGridLazy: React.FunctionComponent = () => (
  <React.Suspense fallback={<Spinner label="Loading file type icons..." />}>
    <FileTypeIconGrid />
  </React.Suspense>
);
