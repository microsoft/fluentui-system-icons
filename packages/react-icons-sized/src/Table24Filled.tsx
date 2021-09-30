import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 21h5v-5h-5v5z" fill={primaryFill} /><path d="M16 21h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5z" fill={primaryFill} /><path d="M21 14.5v-5h-5v5h5z" fill={primaryFill} /><path d="M21 8V6.25C21 4.45 19.54 3 17.75 3H16v5h5z" fill={primaryFill} /><path d="M14.5 3h-5v5h5V3z" fill={primaryFill} /><path d="M8 3H6.25A3.25 3.25 0 003 6.25V8h5V3z" fill={primaryFill} /><path d="M3 9.5v5h5v-5H3z" fill={primaryFill} /><path d="M3 16v1.75C3 19.55 4.46 21 6.25 21H8v-5H3z" fill={primaryFill} /><path d="M14.5 9.5v5h-5v-5h5z" fill={primaryFill} /></svg>;
}

const Table24Filled = wrapIcon(rawSvg({}), 'Table24Filled');
export default Table24Filled;
      