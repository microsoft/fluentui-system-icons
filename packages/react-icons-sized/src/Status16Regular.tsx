import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.35 1.65a2.27 2.27 0 00-3.2 0L6.9 5.9a.5.5 0 00-.12.2L5.53 9.83a.5.5 0 00.63.63L9.9 9.22a.5.5 0 00.2-.12l4.24-4.25c.89-.88.89-2.32 0-3.2zm-2.5.7a1.27 1.27 0 011.8 1.8L9.48 8.3l-2.69.9.9-2.69 4.16-4.17z" fill={primaryFill} /><path d="M8 3l.37.01.88-.88A6.02 6.02 0 002 8a6 6 0 1011.87-1.25l-.88.88L13 8a5 5 0 11-5-5z" fill={primaryFill} /></svg>;
}

const Status16Regular = wrapIcon(rawSvg({}), 'Status16Regular');
export default Status16Regular;
      