import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 21h1.75c1.8 0 3.25-1.46 3.25-3.25V16h-5v5z" fill={primaryFill} /><path d="M16 14.5h5v-5h-5v5z" fill={primaryFill} /><path d="M10.48 9.5h4.02v5h-4.02c.04-.25.02-.5-.05-.75h.82a1.75 1.75 0 100-3.5h-.82c.07-.24.09-.5.05-.75z" fill={primaryFill} /><path d="M16 8h5V6.25C21 4.45 19.54 3 17.75 3H16v5z" fill={primaryFill} /><path d="M14.5 3v5h-5V3.75a.75.75 0 01.75-.75h4.25z" fill={primaryFill} /><path d="M14.5 16v5h-4.25a.75.75 0 01-.75-.75V16h5z" fill={primaryFill} /><path d="M4.5 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75z" fill={primaryFill} /><path d="M9.25 9.19c.3.27.34.75.06 1.06l-.89 1h2.83a.75.75 0 010 1.5H8.42l.9 1a.75.75 0 01-1.13 1l-2-2.25a.75.75 0 010-1l2-2.25a.75.75 0 011.06-.06z" fill={primaryFill} /></svg>;
}

const TableMoveLeft24Filled = wrapIcon(rawSvg({}), 'TableMoveLeft24Filled');
export default TableMoveLeft24Filled;
      