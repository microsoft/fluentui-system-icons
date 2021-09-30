import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 4.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5h16.5z" fill={primaryFill} /><path d="M20.78 9.72c.14.14.22.33.22.53v4.25h-5v-5h4.25c.2 0 .39.08.53.22z" fill={primaryFill} /><path d="M14.5 14.5v-4.02c-.25.04-.5.02-.75-.05v.82a1.75 1.75 0 11-3.5 0v-.82c-.24.07-.5.09-.75.05v4.02h5z" fill={primaryFill} /><path d="M9.5 16h5v5h-5v-5z" fill={primaryFill} /><path d="M8 14.5v-5H3.75a.75.75 0 00-.75.75v4.25h5z" fill={primaryFill} /><path d="M3 16h5v5H6.25A3.25 3.25 0 013 17.75V16z" fill={primaryFill} /><path d="M16 16h5v1.75c0 1.8-1.46 3.25-3.25 3.25H16v-5z" fill={primaryFill} /><path d="M14.81 9.25a.75.75 0 01-1.06.06l-1-.89v2.83a.75.75 0 01-1.5 0V8.42l-1 .9a.75.75 0 01-1-1.13l2.25-2a.75.75 0 011 0l2.25 2c.3.27.34.75.06 1.06z" fill={primaryFill} /></svg>;
}

const TableMoveAbove24Filled = wrapIcon(rawSvg({}), 'TableMoveAbove24Filled');
export default TableMoveAbove24Filled;
      