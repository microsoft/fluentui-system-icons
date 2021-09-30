import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 1a6 6 0 016 6.21 2.5 2.5 0 00-1-.2V7a5 5 0 10-4 4.9v1.02A6 6 0 117 1zm-.75 7.04l2.87-2.88a.5.5 0 01.77.64l-.06.07L6.6 9.1a.5.5 0 01-.63.06L5.9 9.1 4.15 7.35a.5.5 0 01.63-.76l.07.06 1.4 1.4zM10.5 10H10a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1v-2.5-.5a1 1 0 00-1-1h-.5v-.5a1.5 1.5 0 00-3 0v.5zm1-.5a.5.5 0 011 0v.5h-1v-.5zM12 13a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /></svg>;
}

const CheckmarkLock16Regular = wrapIcon(rawSvg({}), 'CheckmarkLock16Regular');
export default CheckmarkLock16Regular;
      