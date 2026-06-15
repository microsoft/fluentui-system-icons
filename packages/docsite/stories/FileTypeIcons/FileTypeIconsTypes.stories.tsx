import { makeStyles, shorthands } from '@fluentui/react-components';
import { FileTypeIcon, FileIconType } from '@fluentui/react-icons-file-type';
import * as React from 'react';

const useClasses = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
  },
});

export const Types = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      <FileTypeIcon type={FileIconType.folder} size={48} />
      <FileTypeIcon type={FileIconType.sharedFolder} size={48} />
      <FileTypeIcon type={FileIconType.linkedFolder} size={48} />
      <FileTypeIcon type={FileIconType.list} size={48} />
      <FileTypeIcon type={FileIconType.multiple} size={48} />
    </div>
  );
};

Types.parameters = {
  docs: {
    description: {
      story:
        'Some icons are not tied to a file extension — such as folders or lists. Use the `type` prop with `FileIconType` (e.g. `FileIconType.folder`) to render them.',
    },
  },
};
