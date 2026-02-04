import * as React from 'react';
import { makeStyles } from '@griffel/react';

import { SvgIconExamples } from './svg-icon.example';

const Atoms = React.lazy(() => import('./atoms').then((mod) => ({ default: mod.Atoms })));
const Chunk = React.lazy(() => import('./chunk').then((mod) => ({ default: mod.Chunk })));
const All = React.lazy(() => import('./all').then((mod) => ({ default: mod.All })));
const AllSvg = React.lazy(() => import('./all-svg').then((mod) => ({ default: mod.AllSvgIcons })));

const useRootStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export function App() {
  const styles = useRootStyles();
  const [state, setState] = React.useState<'atoms' | 'all' | 'all-svg' | 'chunk' | null>(null);

  return (
    <main>
      <section>
        <div>
          <h1>Load icons</h1>
          <div>
            <p>Demonstration of All icons (import all at once)</p>
            <button onClick={() => setState('all')}>All</button>
          </div>
          <div>
            <SvgIconExamples />
          </div>
          <div>
            <p>Demonstration of All Svg icons (import all at once)</p>
            <button onClick={() => setState('all-svg')}>All Svg</button>
          </div>
          <div>
            <p>Demonstration of Chunk icons (import a chunk of icons).</p>
            <blockquote>
              <p>Showcase problem with bundle size if 2 icons are not in same chunk</p>
            </blockquote>

            <button onClick={() => setState('chunk')}>Chunk</button>
          </div>
          <div>
            <p>Demonstration of Atoms icons (import per icon)</p>
            <button onClick={() => setState('atoms')}>Atoms</button>
          </div>
        </div>
        <div>
          <h2>Icons</h2>
          <React.Suspense fallback={<div>Loading...</div>}>
            <div className={styles.root}>
              {state === 'atoms' && <Atoms />}
              {state === 'all' && <All />}
              {state === 'all-svg' && <AllSvg />}
              {state === 'chunk' && <Chunk />}
            </div>
          </React.Suspense>
        </div>
      </section>
    </main>
  );
}
