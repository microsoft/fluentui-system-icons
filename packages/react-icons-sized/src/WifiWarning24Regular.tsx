import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.74 10.75l.3.3a2.54 2.54 0 00-1.85.31 6.56 6.56 0 00-10 2.12.75.75 0 11-1.34-.67 8.06 8.06 0 0112.9-2.06zM11.96 19l1.21-2.43A1.5 1.5 0 1011.95 19zm2.23-4.46l.67-1.36a5.1 5.1 0 00-7.48 2.2.75.75 0 001.37.61 3.6 3.6 0 015.43-1.45zm6.26-6.26c.5.5.99 1.09 1.4 1.7a.75.75 0 11-1.23.85 10.45 10.45 0 00-17.23 0 .75.75 0 01-1.23-.86 11.95 11.95 0 0118.29-1.69zm-4.3 4.55l-3.99 8A1.5 1.5 0 0013.5 23h8a1.5 1.5 0 001.34-2.17l-4-8a1.5 1.5 0 00-2.68 0zM18 15.5v3a.5.5 0 01-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const WifiWarning24Regular = wrapIcon(rawSvg({}), 'WifiWarning24Regular');
export default WifiWarning24Regular;
      