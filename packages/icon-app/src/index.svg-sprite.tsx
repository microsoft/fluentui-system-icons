import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.svg-sprite';

main();

function main() {
  const rootDiv = document.createElement('div');
  document.body.append(rootDiv);

  const root = createRoot(rootDiv);
  root.render(<App />);
}
