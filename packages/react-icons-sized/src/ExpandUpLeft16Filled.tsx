import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.23 2.5a.5.5 0 00-.5-.5H2.5a.5.5 0 00-.5.5v4.23a.5.5 0 001 0V3.71l3.38 3.37a.5.5 0 10.7-.7L3.71 3h3.02a.5.5 0 00.5-.5zm4.27.5c.83 0 1.5.67 1.5 1.5V8H9.77C8.79 8 8 8.8 8 9.77V13H4.5A1.5 1.5 0 013 11.5V9.27a.5.5 0 00-1 0v2.23A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2H9.27a.5.5 0 000 1h2.23z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft16Filled = wrapIcon(rawSvg({}), 'ExpandUpLeft16Filled');
export default ExpandUpLeft16Filled;
      