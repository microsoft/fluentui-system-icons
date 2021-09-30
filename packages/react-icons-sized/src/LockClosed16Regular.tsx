import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.84 1.5H8a2.5 2.5 0 012.5 2.34V5h1c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 12.5v-6C3 5.67 3.67 5 4.5 5h1V4a2.5 2.5 0 012.34-2.5zM11.5 6h-7a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5zM8 8.5a1 1 0 110 2 1 1 0 010-2zm.14-6H8c-.78 0-1.42.6-1.5 1.36V5h3V4c0-.78-.6-1.42-1.36-1.5z" fill={primaryFill} /></svg>;
}

const LockClosed16Regular = wrapIcon(rawSvg({}), 'LockClosed16Regular');
export default LockClosed16Regular;
      