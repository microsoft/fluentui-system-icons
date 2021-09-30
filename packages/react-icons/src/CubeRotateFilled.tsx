import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.53 2.63c.93-.43 2-.43 2.94 0l4.66 2.15c.53.24.87.77.87 1.36V8h-1a1.5 1.5 0 00-.81 2.76A10.54 10.54 0 019.99 12c-2.1 0-3.92-.5-5.18-1.24A1.5 1.5 0 004 8H3V6.14c0-.59.34-1.12.87-1.36l4.66-2.15zM6.7 6.54a.5.5 0 00-.4.92l3.2 1.37v1.67a.5.5 0 101 0V8.83l3.2-1.37a.5.5 0 10-.4-.92L10 7.96 6.7 6.54z" fill={primaryFill} /><path d="M15.5 9.5c0-.28.22-.5.5-.5h2.5a.5.5 0 01.5.5V12a.5.5 0 11-1 0v-.98a6.2 6.2 0 01-1.64 1.37A12.4 12.4 0 0110 14a12.4 12.4 0 01-6.36-1.61A6.2 6.2 0 012 11.02V12a.5.5 0 11-1 0V9.5a.5.5 0 01.5-.5H4a.5.5 0 010 1H2.48a4.12 4.12 0 00.92 1c.2.17.44.34.7.5l.06.04c.4.25.87.47 1.37.67 1.27.5 2.8.79 4.47.79s3.2-.3 4.47-.8A8.69 8.69 0 0016.6 11a5.24 5.24 0 00.92-1H16a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10 15c-2.66 0-5.16-.67-7-1.83v.69c0 .58.34 1.12.87 1.36l4.66 2.15c.93.43 2 .43 2.94 0l4.66-2.15c.53-.24.87-.78.87-1.36v-.69A13.32 13.32 0 0110 15z" fill={primaryFill} /></svg>;
}

const CubeRotateFilled = wrapIcon(rawSvg({}), 'CubeRotateFilled');
export default CubeRotateFilled;
      