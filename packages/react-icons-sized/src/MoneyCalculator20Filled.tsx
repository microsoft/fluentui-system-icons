import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5C2 3.67 2.67 3 3.5 3h11c.83 0 1.5.67 1.5 1.5V8h-3a2 2 0 00-2 2v3H3.5A1.5 1.5 0 012 11.5v-7zM4 7a2 2 0 002-2V4H5v1a1 1 0 01-1 1H3v1h1zm3.25 1a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0zM3 9v1h1a1 1 0 011 1v1h1v-1a2 2 0 00-2-2H3zm12-2V6h-1a1 1 0 01-1-1V4h-1v1c0 1.1.9 2 2 2h1zm2 1V5.09c.58.2 1 .76 1 1.41V8h-1zm-6 6v1H5.5a1.5 1.5 0 01-1.41-1H11zm2.5-5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-4zm0 4h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zm-3 2h1a.5.5 0 010 1h-1a.5.5 0 010-1zm3 0h1a.5.5 0 010 1h-1a.5.5 0 010-1zM13 10.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const MoneyCalculator20Filled = wrapIcon(rawSvg({}), 'MoneyCalculator20Filled');
export default MoneyCalculator20Filled;
      