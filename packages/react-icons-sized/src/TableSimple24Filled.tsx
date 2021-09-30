import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 21h-5v-8.25H21v5c0 1.8-1.46 3.25-3.25 3.25z" fill={primaryFill} /><path d="M21 11.25h-8.25V3h5C19.55 3 21 4.46 21 6.25v5z" fill={primaryFill} /><path d="M11.25 11.25V3h-5A3.25 3.25 0 003 6.25v5h8.25z" fill={primaryFill} /><path d="M3 12.75v5C3 19.55 4.46 21 6.25 21h5v-8.25H3z" fill={primaryFill} /></svg>;
}

const TableSimple24Filled = wrapIcon(rawSvg({}), 'TableSimple24Filled');
export default TableSimple24Filled;
      