import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.78 10.7l.35.38c-.8-.2-1.67-.02-2.3.56a6.13 6.13 0 00-9.26 2.04 1 1 0 01-1.78-.9 8.13 8.13 0 0113-2.07zM11.96 19l1.21-2.43A1.5 1.5 0 1011.95 19zm2.07-4.15l.9-1.8a5.23 5.23 0 00-7.69 2.26 1 1 0 101.84.8 3.23 3.23 0 014.95-1.26zm6.39-6.55c.5.5.99 1.09 1.4 1.69a1 1 0 01-1.64 1.14 9.92 9.92 0 00-16.36 0 1 1 0 01-1.64-1.15A11.92 11.92 0 0120.42 8.3zm-4.26 4.53l-4 8A1.5 1.5 0 0013.5 23h8a1.5 1.5 0 001.34-2.17l-4-8a1.5 1.5 0 00-2.68 0zM18 15.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const WifiWarning24Filled = wrapIcon(rawSvg({}), 'WifiWarning24Filled');
export default WifiWarning24Filled;
      