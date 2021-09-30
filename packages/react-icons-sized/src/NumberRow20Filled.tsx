import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 3.5a.5.5 0 011 0v7a.5.5 0 01-1 0v-7z" fill={primaryFill} /><path d="M13 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3zm.5 3h2c.28 0 .5.22.5.5V10a.5.5 0 01-.5.5H14V13h1.5a.5.5 0 010 1h-2a.5.5 0 01-.5-.5V10c0-.28.22-.5.5-.5H15V7h-1.5a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const NumberRow20Filled = wrapIcon(rawSvg({}), 'NumberRow20Filled');
export default NumberRow20Filled;
      