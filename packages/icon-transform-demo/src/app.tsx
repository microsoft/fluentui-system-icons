import * as React from 'react';
import { makeStyles } from '@griffel/react';

// ----------------------------------------------------------------
// All imports below use the barrel entry `@fluentui/react-icons`.
// At build time, `@fluentui/react-icons-atomic-webpack-loader`
// rewrites each named import to its atomic module path, e.g.:
//   import { AddRegular } from '@fluentui/react-icons'
//   → import { AddRegular } from '@fluentui/react-icons/svg/add'
// ----------------------------------------------------------------
import {
  AccessTimeRegular,
  AccessTimeFilled,
  AccessibilityRegular,
  AccessibilityFilled,
  AddRegular,
  AddFilled,
  AddCircleRegular,
  AddCircleFilled,
  AgentsRegular,
  AgentsFilled,
  AirplaneRegular,
  AirplaneFilled,
  AlertRegular,
  AlertFilled,
  AlbumRegular,
  AlbumFilled,
  AlignLeftRegular,
  AlignLeftFilled,
  AnimalCatRegular,
  AnimalCatFilled,
  bundleIcon,
  iconFilledClassName,
  iconRegularClassName,
} from '@fluentui/react-icons';

// import { AccessTimeRegular as AccessTimeRegularHeadless } from '@fluentui/react-icons/headless/svg/access-time';

// ---------- compound (bundled) icons ----------
const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);
const Accessibility = bundleIcon(AccessibilityFilled, AccessibilityRegular);
const Add = bundleIcon(AddFilled, AddRegular);
const AddCircle = bundleIcon(AddCircleFilled, AddCircleRegular);
const Agents = bundleIcon(AgentsFilled, AgentsRegular);
const Airplane = bundleIcon(AirplaneFilled, AirplaneRegular);
const Alert = bundleIcon(AlertFilled, AlertRegular);
const Album = bundleIcon(AlbumFilled, AlbumRegular);
const AlignLeft = bundleIcon(AlignLeftFilled, AlignLeftRegular);
const AnimalCat = bundleIcon(AnimalCatFilled, AnimalCatRegular);

type IconEntry = { Icon: ReturnType<typeof bundleIcon>; name: string };

const icons: IconEntry[] = [
  { Icon: AccessTime, name: 'AccessTime' },
  { Icon: Accessibility, name: 'Accessibility' },
  { Icon: Add, name: 'Add' },
  { Icon: AddCircle, name: 'AddCircle' },
  { Icon: Agents, name: 'Agents' },
  { Icon: Airplane, name: 'Airplane' },
  { Icon: Alert, name: 'Alert' },
  { Icon: Album, name: 'Album' },
  { Icon: AlignLeft, name: 'AlignLeft' },
  { Icon: AnimalCat, name: 'AnimalCat' },
];

// ---------- styles ----------
const useStyles = makeStyles({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '110px',
    height: '110px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    fontSize: '36px',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '150ms',
    [`&:hover .${iconFilledClassName}`]: { display: 'inline' },
    [`&:hover .${iconRegularClassName}`]: { display: 'none' },
  },
  label: {
    fontSize: '11px',
    marginTop: '6px',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100px',
  },
  header: {
    padding: '16px 16px 0',
    fontFamily: 'system-ui, sans-serif',
  },
  subtitle: {
    color: '#666',
    fontSize: '14px',
    fontWeight: 'normal',
    marginTop: '4px',
  },
});

// ---------- components ----------
function IconCard({ Icon, name }: IconEntry) {
  const styles = useStyles();

  return (
    <div className={styles.card}>
      <Icon />
      <span className={styles.label}>{name}</span>
    </div>
  );
}

export function App() {
  const styles = useStyles();

  return (
    <main>
      <div className={styles.header}>
        <h1>Fluent Icons — Transform Demo</h1>
        <p className={styles.subtitle}>
          20 icons (10 groups × Filled + Regular) imported via barrel entry.
          <br />
          <code>@fluentui/react-icons-atomic-webpack-loader</code> rewrites them to atomic paths at build time.
        </p>
      </div>
      <div className={styles.grid}>
        {icons.map(({ Icon, name }) => (
          <IconCard key={name} Icon={Icon} name={name} />
        ))}
        {/* <IconCard Icon={AccessTimeRegularHeadless} name="AccessTimeRegular (headless)" /> */}
      </div>
    </main>
  );
}
