import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.8 26H6.46a4.46 4.46 0 01-3.26-7.5l1.38-1.48a3.88 3.88 0 00-.1-5.4l-1.35-1.35A.75.75 0 014.2 9.21l1.36 1.36a5.38 5.38 0 01.12 7.47L4.3 19.52a2.96 2.96 0 002.17 4.98h.98a28.58 28.58 0 01.62-6.26c.41-1.77 1.1-3.6 2.28-5.01a6.42 6.42 0 014.42-2.38V5.67A3.67 3.67 0 0118.43 2c.82 0 1.48.66 1.48 1.48v.95h2.15c1.1 0 2.12.57 2.7 1.5l.76 1.22a3.18 3.18 0 01-2.57 4.86v11.42A2.57 2.57 0 0120.38 26H19.3v-2.57a4.4 4.4 0 00-4.4-4.4H13.4a.75.75 0 000 1.5h1.51c1.6 0 2.9 1.3 2.9 2.9V26z" fill={primaryFill} /></svg>;
}

const AnimalCat28Filled = wrapIcon(rawSvg({}), 'AnimalCat28Filled');
export default AnimalCat28Filled;
      