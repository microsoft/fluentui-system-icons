import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.52 26h11.86a2.57 2.57 0 002.57-2.57V12a3.18 3.18 0 002.57-4.86l-.76-1.21a3.18 3.18 0 00-2.7-1.5h-2.15v-.96c0-.82-.66-1.48-1.48-1.48a3.67 3.67 0 00-3.67 3.67v5.18a6.42 6.42 0 00-4.42 2.38 12.17 12.17 0 00-2.28 5 25.57 25.57 0 00-.62 6.27h-.99a2.96 2.96 0 01-2.16-4.98l1.38-1.48a5.38 5.38 0 00-.12-7.47L4.19 9.2a.75.75 0 10-1.06 1.06l1.36 1.36a3.88 3.88 0 01.09 5.4L3.2 18.5A4.46 4.46 0 006.45 26h2.07zm9.89-22.5v1.68c0 .42.34.75.75.75h2.9c.58 0 1.12.3 1.43.8l.75 1.21a1.68 1.68 0 01-1.43 2.57h-.61a.75.75 0 00-.75.75v12.17c0 .59-.48 1.07-1.07 1.07H19.3v-1.07a4.4 4.4 0 00-4.4-4.4H13.4a.75.75 0 000 1.5h1.51c1.6 0 2.9 1.3 2.9 2.9v1.07H8.94a27.01 27.01 0 01.58-5.92c.39-1.66 1-3.24 1.97-4.4a4.97 4.97 0 014.02-1.86c.42 0 .75-.34.75-.75v-5.9c0-1.2.96-2.16 2.15-2.17z" fill={primaryFill} /></svg>;
}

const AnimalCat28Regular = wrapIcon(rawSvg({}), 'AnimalCat28Regular');
export default AnimalCat28Regular;
      