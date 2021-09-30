import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.43A.5.5 0 015.57 3c.74.11 1.32.7 1.43 1.43a.5.5 0 11-1 .14.68.68 0 00-.57-.57.5.5 0 01-.43-.57zm-3 .93A3.43 3.43 0 015.5 1C7.41 1 9 2.48 9 4.36c0 1.24-.46 2.38-1.1 3.21A3.65 3.65 0 016 8.94v.46c0 .22.18.4.4.4h1.2c.77 0 1.4.63 1.4 1.4v.3a.5.5 0 01-1 0v-.3a.4.4 0 00-.4-.4H6.4A1.4 1.4 0 015 9.4v-.46a3.65 3.65 0 01-1.9-1.37A5.32 5.32 0 012 4.37zM5.5 2C4.1 2 3 3.08 3 4.36c0 1 .37 1.93.9 2.6C4.43 7.66 5.05 8 5.5 8c.45 0 1.07-.34 1.6-1.04.53-.68.9-1.6.9-2.6C8 3.08 6.9 2 5.5 2z" fill={primaryFill} /></svg>;
}

const Balloon12Regular = wrapIcon(rawSvg({}), 'Balloon12Regular');
export default Balloon12Regular;
      