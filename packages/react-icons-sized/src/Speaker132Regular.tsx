import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.87 4.72A1.25 1.25 0 0118 5.6v20.8a1.25 1.25 0 01-2.13.88l-4.7-4.7A2 2 0 009.76 22H6a4 4 0 01-4-4v-4a4 4 0 014-4h3.76a2 2 0 001.41-.59l4.7-4.69zm.13 2.7l-3.41 3.4A4 4 0 019.76 12H6a2 2 0 00-2 2v4c0 1.1.9 2 2 2h3.76a4 4 0 012.83 1.17L16 24.6V7.4zm5.43 1.76a1 1 0 011.4.25A11.53 11.53 0 0125.05 16c0 2.24-.77 4.44-2.24 6.57a1 1 0 11-1.64-1.14A9.54 9.54 0 0023.06 16c0-1.76-.6-3.56-1.88-5.43a1 1 0 01.25-1.4z" fill={primaryFill} /></svg>;
}

const Speaker132Regular = wrapIcon(rawSvg({}), 'Speaker132Regular');
export default Speaker132Regular;
      