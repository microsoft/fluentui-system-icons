import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.83 1.76L8 1.75a2.75 2.75 0 012.74 2.58l.01.17V5h.75c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 12.5v-6C3 5.67 3.67 5 4.5 5h.75v-.5a2.75 2.75 0 012.58-2.74L8 1.75h-.17zM8 8.5a1 1 0 100 2 1 1 0 000-2zm.13-5.24L8 3.25c-.65 0-1.18.5-1.24 1.12l-.01.13V5h2.5v-.5c0-.65-.5-1.18-1.12-1.24L8 3.25h.13z" fill={primaryFill} /></svg>;
}

const LockClosed16Filled = wrapIcon(rawSvg({}), 'LockClosed16Filled');
export default LockClosed16Filled;
      