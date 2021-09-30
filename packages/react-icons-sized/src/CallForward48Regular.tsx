import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5.94A9.25 9.25 0 0017.2 4.1a7.26 7.26 0 00-5.6 4.12A37.3 37.3 0 008 24.5c0 6.9 1.7 12.03 3.57 15.57a7.12 7.12 0 005.51 3.83c2.23.28 4.6-.35 6.6-1.73a5.14 5.14 0 002.16-5.05l-.66-4.04a5.25 5.25 0 00-4.22-4.32l-2.03-.38c-.9-.17-1.47-.69-1.61-1.28-.44-1.89-.45-4.3 0-6.2.13-.6.7-1.12 1.6-1.28l2.04-.38a5.25 5.25 0 004.22-4.32l.7-4.32A4.86 4.86 0 0024 5.94zM13.84 9.3a4.76 4.76 0 013.71-2.74c1.59-.23 3.4.22 4.95 1.38.7.53 1.06 1.4.92 2.26l-.7 4.32a2.75 2.75 0 01-2.22 2.26l-2.03.38c-1.56.29-3.16 1.33-3.59 3.17a17.13 17.13 0 000 7.34c.43 1.84 2.03 2.88 3.6 3.17l2.02.38a2.75 2.75 0 012.22 2.26l.65 4.04c.17 1-.27 2.02-1.1 2.6a7.14 7.14 0 01-4.87 1.3c-1.5-.2-2.82-1-3.62-2.51-1.69-3.2-3.28-7.94-3.28-14.41 0-6.53 1.62-11.62 3.34-15.2z" fill={primaryFill} /><path d="M33.13 13.87a1.25 1.25 0 00-1.76 1.76L37.73 22H23.75a1.25 1.25 0 000 2.5h13.98l-6.36 6.37a1.25 1.25 0 001.76 1.76l8.5-8.5c.5-.48.5-1.28 0-1.76l-8.5-8.5z" fill={primaryFill} /></svg>;
}

const CallForward48Regular = wrapIcon(rawSvg({}), 'CallForward48Regular');
export default CallForward48Regular;
      