import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.54 4.38c2.06-.28 3.79.98 4.6 2.62l2.03 4.04a5.63 5.63 0 01-1.22 6.51c-1 .98-2.01 2.09-2.6 3.07a.33.33 0 00-.03.23c.54 2.93 2.52 5.82 4.3 7.9.15.18.43.27.71.18l3.98-1.24c2.2-.69 4.59.14 5.9 2.03l2.87 4.19a4.42 4.42 0 01.58 4.15 9.84 9.84 0 01-3.45 4.5c-1.95 1.32-4.62 1.82-8.12.62-3.9-1.34-7.59-4.7-10.65-9A49.4 49.4 0 019.3 18.84c-1.45-5.32-.57-8.9 1.5-11.2 1.98-2.23 4.83-2.98 6.75-3.25zm2.37 3.74c-.45-.91-1.27-1.36-2.03-1.26-1.7.23-3.84.87-5.23 2.43-1.33 1.49-2.25 4.1-.94 8.88a46.9 46.9 0 006.77 14.57c2.91 4.09 6.22 6.98 9.43 8.08 2.85.98 4.69.5 5.9-.33a7.36 7.36 0 002.53-3.36c.2-.51.12-1.17-.32-1.8l-2.88-4.19a2.75 2.75 0 00-3.08-1.07l-3.98 1.25a3.18 3.18 0 01-3.37-.95c-1.84-2.16-4.19-5.47-4.85-9.06a2.83 2.83 0 01.34-1.97 19.02 19.02 0 013-3.58 3.14 3.14 0 00.73-3.6l-2.02-4.04z" fill={primaryFill} /></svg>;
}

const Call48Regular = wrapIcon(rawSvg({}), 'Call48Regular');
export default Call48Regular;
      