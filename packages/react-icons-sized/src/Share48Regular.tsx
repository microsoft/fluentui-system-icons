import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.6 6.84a1.25 1.25 0 00-2.1.91v5.47a18.14 18.14 0 00-7.02 1.58c-4.4 2-8.92 6.37-9.97 15.56a1.25 1.25 0 002.07 1.07c4.34-3.85 8.4-5.5 11.34-6.21a17.71 17.71 0 013.58-.5v5.53a1.25 1.25 0 002.1.91l12-11.25a1.25 1.25 0 000-1.82l-12-11.25zm-1 8.9h.03A1.25 1.25 0 0032 14.5v-3.86L40.92 19 32 27.36V23.5c0-.63-.45-1.16-1.1-1.24h-.04a4.09 4.09 0 00-.4-.04 20.21 20.21 0 00-5.12.56c-2.69.65-6.1 1.98-9.79 4.66 1.5-6.08 4.87-8.96 7.97-10.36a15.64 15.64 0 017.09-1.34zM12.26 8A6.25 6.25 0 006 14.25v21.5C6 39.2 8.8 42 12.25 42h21.5C37.2 42 40 39.2 40 35.75V33.5a1.25 1.25 0 10-2.5 0v2.25a3.75 3.75 0 01-3.75 3.75h-21.5a3.75 3.75 0 01-3.75-3.75v-21.5a3.75 3.75 0 013.75-3.75h8.25a1.25 1.25 0 100-2.5h-8.25z" fill={primaryFill} /></svg>;
}

const Share48Regular = wrapIcon(rawSvg({}), 'Share48Regular');
export default Share48Regular;
      