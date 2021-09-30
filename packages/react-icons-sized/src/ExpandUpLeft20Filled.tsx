import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4a2 2 0 012 2v4h-4a2 2 0 00-2 2v4H6a2 2 0 01-2-2v-2.5a.5.5 0 00-1 0V14a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3h-2.5a.5.5 0 000 1H14zm-5-.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 001 0V4.7l4.15 4.15a.5.5 0 10.7-.7L4.71 4H8.5a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft20Filled = wrapIcon(rawSvg({}), 'ExpandUpLeft20Filled');
export default ExpandUpLeft20Filled;
      