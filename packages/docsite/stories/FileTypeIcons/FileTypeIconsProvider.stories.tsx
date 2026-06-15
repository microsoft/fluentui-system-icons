import { makeStyles, shorthands } from '@fluentui/react-components';
import { FileTypeIcon, FileTypeIconsProvider, DEFAULT_BASE_URL } from '@fluentui/react-icons-file-type';
import * as React from 'react';

const useClasses = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
  },
});

export const Provider = () => {
  const classes = useClasses();

  return (
    <FileTypeIconsProvider baseUrl={DEFAULT_BASE_URL}>
      <div className={classes.container}>
        <FileTypeIcon extension="docx" size={48} />
        <FileTypeIcon extension="xlsx" size={48} />
        <FileTypeIcon extension="pptx" size={48} />
      </div>
    </FileTypeIconsProvider>
  );
};

Provider.parameters = {
  docs: {
    description: {
      story:
        'Wrap a subtree with `FileTypeIconsProvider` to configure the asset host once. Pass a `baseUrl` to serve the icons from your own CDN. A per-icon `baseUrl` prop on `FileTypeIcon` takes precedence over the provider. Here the provider is configured with the default Fluent CDN base URL.',
    },
  },
};
