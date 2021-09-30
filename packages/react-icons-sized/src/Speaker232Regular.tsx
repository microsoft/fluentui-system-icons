import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.6a1.25 1.25 0 00-2.13-.88l-4.7 4.7a2 2 0 01-1.41.58H6a4 4 0 00-4 4v4a4 4 0 004 4h3.76a2 2 0 011.41.59l4.7 4.69c.78.79 2.13.23 2.13-.88V5.6zm-5.41 5.23L16 7.4V24.6l-3.41-3.42A4 4 0 009.76 20H6a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h3.76a4 4 0 002.83-1.17zm10.23-1.4a1 1 0 10-1.64 1.14A9.54 9.54 0 0123.06 16c0 1.76-.6 3.56-1.88 5.43a1 1 0 001.64 1.14A11.53 11.53 0 0025.06 16c0-2.24-.77-4.44-2.24-6.57zm2.87-4.15a1 1 0 00-1.38 1.44C26.7 9 27.94 12.46 27.94 16c0 3.54-1.24 7-3.63 9.28a1 1 0 001.38 1.44C28.55 24 29.94 19.96 29.94 16c0-3.96-1.39-8-4.25-10.72z" fill={primaryFill} /></svg>;
}

const Speaker232Regular = wrapIcon(rawSvg({}), 'Speaker232Regular');
export default Speaker232Regular;
      