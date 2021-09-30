import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5C3 3.67 3.67 3 4.5 3h10c.83 0 1.5.67 1.5 1.5v.59c.58.2 1 .76 1 1.41v9c0 .83-.67 1.5-1.5 1.5h-10A2.5 2.5 0 013 14.5v-10zm1 0c0 .28.22.5.5.5H15v-.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5zM14.5 11h-1a.5.5 0 000 1h1a.5.5 0 000-1z" fill={primaryFill} /></svg>;
}

const Wallet20Filled = wrapIcon(rawSvg({}), 'Wallet20Filled');
export default Wallet20Filled;
      