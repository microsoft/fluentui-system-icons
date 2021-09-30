import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 21h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5z" fill={primaryFill} /><path d="M16 14.5h5v-5h-5v5z" fill={primaryFill} /><path d="M14.5 9.5v5h-5v-5h5z" fill={primaryFill} /><path d="M14.5 8h-5V4.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75H9.5V16h5v5H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h8.25v5z" fill={primaryFill} /><path d="M16 8h5V6.25C21 4.45 19.54 3 17.75 3H16v5z" fill={primaryFill} /></svg>;
}

const TableFreezeColumn24Filled = wrapIcon(rawSvg({}), 'TableFreezeColumn24Filled');
export default TableFreezeColumn24Filled;
      