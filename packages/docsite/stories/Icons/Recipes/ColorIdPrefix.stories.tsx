import { Body1Stronger, Button, makeStyles, tokens } from '@fluentui/react-components';
import { CalendarColor } from '@fluentui/react-icons';
import * as React from 'react';

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start',
  },
  columns: {
    display: 'flex',
    gap: '32px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '12px',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
  },
  icons: {
    fontSize: '48px',
  },
  hidden: {
    display: 'none',
  },
});

// `idPrefix` recipe: scope a Color icon's gradient/clip-path/filter ids so the
// same icon can render multiple times without id collisions. The Color Variants
// concept page links here rather than duplicating the demo.
export const ColorIdPrefix = () => {
  const classes = useClasses();
  // Toggling `display: none` on one instance is what triggers the gradient ID
  // collision: the removed <defs> take the shared (unscoped) ids with them.
  const [hidden, setHidden] = React.useState(false);

  return (
    <div className={classes.root}>
      <Button onClick={() => setHidden((value) => !value)}>
        {hidden ? 'Show first instance' : 'Hide first instance (display: none)'}
      </Button>

      <div className={classes.columns}>
        <div className={classes.column}>
          <Body1Stronger>❌ Without idPrefix</Body1Stronger>
          <div className={classes.icons}>
            <CalendarColor
              className={hidden ? classes.hidden : undefined}
              aria-hidden={hidden}
              aria-label="Calendar A"
            />
            <CalendarColor aria-label="Calendar B" />
          </div>
        </div>

        <div className={classes.column}>
          <Body1Stronger>✅ With idPrefix</Body1Stronger>
          <div className={classes.icons}>
            <CalendarColor
              idPrefix="cal-a-"
              className={hidden ? classes.hidden : undefined}
              aria-hidden={hidden}
              aria-label="Calendar A"
            />
            <CalendarColor idPrefix="cal-b-" aria-label="Calendar B" />
          </div>
        </div>
      </div>
    </div>
  );
};
ColorIdPrefix.storyName = 'Rendering the same Color icon multiple times';
ColorIdPrefix.parameters = {
  docs: {
    description: {
      story: [
        'Rendering the same `Color` variant more than once can break its gradients because SVG `id`s live in the global DOM namespace.',
        'Click the button to hide the first instance with `display: none`: **without** `idPrefix` (left) the remaining visible icon',
        'loses its gradients — its shared `<defs>` were removed with the hidden instance; **with** a unique `idPrefix` per instance',
        '(right) each icon owns its ids, so it keeps rendering correctly.',
        '',
        'Pass a unique **`idPrefix`** per rendered instance to scope every `id` and its `url(#…)` reference:',
        '',
        '```tsx',
        '<CalendarColor idPrefix="cal-a-" />',
        '<CalendarColor idPrefix="cal-b-" />',
        '```',
        '',
        '**Notes**',
        '',
        '- `idPrefix` only applies to `Color` variants; mono-color icons ignore it.',
        '- **On React 18+, `React.useId()` is the recommended source** — stable across re-renders and SSR-safe:',
        '',
        '  ```tsx',
        '  const id = React.useId();',
        '  return <CalendarColor idPrefix={id} />;',
        '  ```',
        '',
        '  Use **one `useId()` per component instance**. If a component renders several color icons, append a discriminator',
        '  (e.g. ``idPrefix={`${id}-${i}`}``). The colons in `useId()` output are fine — `url(#…)` resolves via `getElementById`, not CSS selectors.',
        '- On React 16.8–17 (no `useId`), derive a **stable, unique** value from your data/key instead. Avoid regenerating it on every render so the memoized output stays cached.',
        '- For color-icon-heavy trees that re-render frequently, also consider wrapping icons in `React.memo` — complementary to the built-in `idPrefix` memoization.',
      ].join('\n'),
    },
  },
};
