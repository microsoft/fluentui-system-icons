import { makeStyles } from '@fluentui/react-components';
import { FileTypeIcon, ICON_SIZES } from '@fluentui/react-icons-file-type';
import * as React from 'react';

const useClasses = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
  },
});

export const Sizes = () => {
  const classes = useClasses();

  return (
    <div className={classes.container}>
      {ICON_SIZES.map((size) => (
        <FileTypeIcon key={size} extension="pptx" size={size} />
      ))}
    </div>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story:
        'Assets are published for a fixed set of pixel sizes, exported as `ICON_SIZES`: `16`, `20`, `24`, `32`, `40`, `48`, `64`, and `96`. The `size` prop selects the asset and sets the rendered `width`/`height`. It defaults to `16`.',
    },
  },
};
