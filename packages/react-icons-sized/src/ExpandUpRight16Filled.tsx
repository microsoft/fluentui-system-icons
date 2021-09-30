import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5V8h3.23C7.21 8 8 8.8 8 9.77V13h3.5c.83 0 1.5-.67 1.5-1.5V9.27a.5.5 0 011 0v2.23a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h2.23a.5.5 0 010 1H4.5zm4.27-.5c0-.28.22-.5.5-.5h4.23c.28 0 .5.22.5.5v4.23a.5.5 0 01-1 0V3.71L9.62 7.08a.5.5 0 11-.7-.7L12.29 3H9.27a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const ExpandUpRight16Filled = wrapIcon(rawSvg({}), 'ExpandUpRight16Filled');
export default ExpandUpRight16Filled;
      