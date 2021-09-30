import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 10.75c.59.6 1.1 1.3 1.49 2.07a.75.75 0 11-1.34.68 6.56 6.56 0 00-11.71-.02.75.75 0 11-1.34-.67 8.06 8.06 0 0112.9-2.06zm-2.1 3.07c.44.45.8 1 1.07 1.58a.75.75 0 01-1.38.6A3.6 3.6 0 008.75 16a.75.75 0 11-1.37-.6 5.1 5.1 0 018.26-1.57zm-2.59 2.62a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12z" fill={primaryFill} /></svg>;
}

const Wifi224Regular = wrapIcon(rawSvg({}), 'Wifi224Regular');
export default Wifi224Regular;
      