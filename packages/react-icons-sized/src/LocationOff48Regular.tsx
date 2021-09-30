import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.13 4.37a1.25 1.25 0 00-1.76 1.76l5.46 5.47A16.92 16.92 0 007 21a16.92 16.92 0 004 10.95l.02.03.02.02H11l10.09 10.7a4 4 0 005.82 0l6.8-7.22 8.16 8.15a1.25 1.25 0 001.76-1.76L6.13 4.37zM9.5 21c0-2.78.78-5.38 2.14-7.59l6.68 6.67a6 6 0 007.6 7.6l6.03 6.04-6.86 7.27c-.59.63-1.59.63-2.18 0l-9.66-10.25-.3-.36A14.43 14.43 0 019.5 21z" fill={primaryFill} /><path d="M14.96 9.66L13.2 7.88a17 17 0 0123.93 23.93l-1.78-1.77A14.5 14.5 0 0014.96 9.66z" fill={primaryFill} /><path d="M23.8 18.5l-2.06-2.06a6 6 0 017.82 7.82L27.5 22.2V22a3.5 3.5 0 00-3.7-3.5z" fill={primaryFill} /></svg>;
}

const LocationOff48Regular = wrapIcon(rawSvg({}), 'LocationOff48Regular');
export default LocationOff48Regular;
      