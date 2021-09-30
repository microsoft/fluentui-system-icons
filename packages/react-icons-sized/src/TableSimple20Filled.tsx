import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v4h6.5V3h-4z" fill={primaryFill} /><path d="M9.5 10.5H3v4A2.5 2.5 0 005.5 17h4v-6.5z" fill={primaryFill} /><path d="M10.5 10.5H17v4a2.5 2.5 0 01-2.5 2.5h-4v-6.5z" fill={primaryFill} /><path d="M17 9.5v-4A2.5 2.5 0 0014.5 3h-4v6.5H17z" fill={primaryFill} /></svg>;
}

const TableSimple20Filled = wrapIcon(rawSvg({}), 'TableSimple20Filled');
export default TableSimple20Filled;
      