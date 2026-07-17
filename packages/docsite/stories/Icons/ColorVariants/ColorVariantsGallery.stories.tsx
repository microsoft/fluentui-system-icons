import { makeStyles, tokens } from '@fluentui/react-components';
import { CalendarColor, CameraColor, MailColor, PersonColor, VideoColor } from '@fluentui/react-icons';
import * as React from 'react';

const useStyles = makeStyles({
  gallery: {
    display: 'flex',
    gap: '24px',
    fontSize: '48px',
    color: tokens.colorNeutralForeground1,
  },
});

// A small visual reference of what `Color` variants look like. The concept page
// is documentation-focused; the runnable patterns live in Icons/Recipes.
export const Gallery = () => {
  const styles = useStyles();

  return (
    <div className={styles.gallery}>
      <CalendarColor aria-label="Calendar" />
      <MailColor aria-label="Mail" />
      <PersonColor aria-label="Person" />
      <CameraColor aria-label="Camera" />
      <VideoColor aria-label="Video" />
    </div>
  );
};
Gallery.storyName = 'Color variants at a glance';
Gallery.parameters = {
  docs: {
    description: {
      story: 'A few `Color` variants shown for reference. See the notes above for why they are deprecated.',
    },
  },
};
