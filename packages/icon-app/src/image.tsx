import * as React from 'react';
import { makeStyles } from '@griffel/react';

// Opt-in vanilla CSS: provides the mask, currentColor coloring, RTL flip, and HCM rules.
import '@fluentui/react-icons/image/image.css';

import { MeetNowFilled, MeetNowRegular } from '@fluentui/react-icons/image/meet-now';
import { EmojiSmileSlightFilled } from '@fluentui/react-icons/image/emoji-smile-slight';
import { AccessTimeRegular } from '@fluentui/react-icons/image/access-time';
// Multicolor `*_color` icons render as <img> (cannot be recolored).
import { AddCircleColor } from '@fluentui/react-icons/image/add-circle';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '24px',
    padding: '12px',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '20px',
    fontSize: '40px',
  },
  swatchRed: { color: '#c4314b' },
  swatchBlue: { color: '#0f6cbd' },
  swatchGreen: { color: '#107c10' },
  caption: {
    fontSize: '14px',
    color: '#555',
  },
});

export function Image() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <span className={styles.caption}>
          Monochrome mask icons inherit the text <code>color</code> (via <code>currentColor</code>):
        </span>
        <div className={styles.row}>
          <span className={styles.swatchRed}>
            <MeetNowFilled />
          </span>
          <span className={styles.swatchBlue}>
            <MeetNowRegular />
          </span>
          <span className={styles.swatchGreen}>
            <EmojiSmileSlightFilled />
          </span>
          <AccessTimeRegular />
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.caption}>
          …or via the <code>primaryFill</code> prop (overrides <code>color</code>):
        </span>
        <div className={styles.row}>
          <MeetNowFilled primaryFill="#c4314b" />
          <MeetNowFilled primaryFill="#0f6cbd" />
          <MeetNowFilled primaryFill="#107c10" />
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.caption}>
          Sized via <code>font-size</code> (icons are a <code>1em</code> box):
        </span>
        <div className={styles.row} style={{ fontSize: 'unset' }}>
          <span style={{ fontSize: '16px' }}>
            <AccessTimeRegular />
          </span>
          <span style={{ fontSize: '32px' }}>
            <AccessTimeRegular />
          </span>
          <span style={{ fontSize: '64px' }}>
            <AccessTimeRegular />
          </span>
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.caption}>
          Multicolor <code>*_color</code> icons render as <code>&lt;img&gt;</code> (not recolorable):
        </span>
        <div className={styles.row}>
          <AddCircleColor />
          {/* primaryFill is intentionally ignored by color icons */}
          <span className={styles.swatchRed}>
            <AddCircleColor />
          </span>
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.caption}>Accessible label (renders aria-label / alt):</span>
        <div className={styles.row}>
          <AccessTimeRegular title="Access time" />
          <AddCircleColor title="Add" />
        </div>
      </div>
    </div>
  );
}
