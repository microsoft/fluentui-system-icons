import { makeStyles } from '@fluentui/react-components';
import { FileTypeIcon } from '@fluentui/react-icons-file-type';
import * as React from 'react';

const useClasses = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
});

export const Default = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      <FileTypeIcon extension="docx" size={48} />
      <FileTypeIcon extension="xlsx" size={48} />
      <FileTypeIcon extension="pptx" size={48} />
      <FileTypeIcon extension="pdf" size={48} />
      <FileTypeIcon extension="zip" size={48} />
    </div>
  );
};

Default.parameters = {
  docs: {
    description: {
      story:
        'Render a file type icon by passing a file `extension`. Unknown extensions fall back to a generic file glyph.',
    },
  },
};
