import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 1C7.41 1 9 2.48 9 4.36c0 1.24-.46 2.38-1.1 3.21A3.65 3.65 0 016 8.94v.46c0 .22.18.4.4.4h1.2c.77 0 1.4.63 1.4 1.4v.3a.5.5 0 01-1 0v-.3a.4.4 0 00-.4-.4H6.4A1.4 1.4 0 015 9.4v-.46a3.65 3.65 0 01-1.9-1.37A5.32 5.32 0 012 4.37 3.43 3.43 0 015.5 1zm.07 2a.5.5 0 00-.14 1c.3.04.53.27.58.57A.5.5 0 007 4.43 1.68 1.68 0 005.57 3z" fill={primaryFill} /></svg>;
}

const Balloon12Filled = wrapIcon(rawSvg({}), 'Balloon12Filled');
export default Balloon12Filled;
      