import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 2h-7A2.5 2.5 0 004 4.5v11A2.5 2.5 0 006.5 18h7a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0013.5 2zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 6.5v-1C6 4.67 6.67 4 7.5 4zm.5 7a1 1 0 11-2 0 1 1 0 012 0zm0 3a1 1 0 11-2 0 1 1 0 012 0zm5-2a1 1 0 110-2 1 1 0 010 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm-4-2a1 1 0 110-2 1 1 0 010 2zm1 2a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const Calculator20Filled = wrapIcon(rawSvg({}), 'Calculator20Filled');
export default Calculator20Filled;
      