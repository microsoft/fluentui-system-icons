import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v8.25h5v-5H4.5V6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75V9.5H16v5h5V6.25C21 4.45 19.54 3 17.75 3H6.25z" fill={primaryFill} /><path d="M21 16h-5v5h1.75c1.8 0 3.25-1.46 3.25-3.25V16z" fill={primaryFill} /><path d="M14.5 14.5v-5h-5v5h5z" fill={primaryFill} /><path d="M9.5 16h5v5h-5v-5z" fill={primaryFill} /><path d="M8 16H3v1.75C3 19.55 4.46 21 6.25 21H8v-5z" fill={primaryFill} /></svg>;
}

const TableFreezeRow24Filled = wrapIcon(rawSvg({}), 'TableFreezeRow24Filled');
export default TableFreezeRow24Filled;
      