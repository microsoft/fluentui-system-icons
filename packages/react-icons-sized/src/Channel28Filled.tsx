import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7.17a1.75 1.75 0 101.5 3.16A1.75 1.75 0 003 7.17z" fill={primaryFill} /><path d="M3.17 6.06A2.76 2.76 0 016.5 8.75 2.75 2.75 0 013 11.4v9.35C3 23.1 4.9 25 7.25 25h13.5C23.1 25 25 23.1 25 20.75V7.25C25 4.9 23.1 3 20.75 3H7.25a4.25 4.25 0 00-4.08 3.06zM9.75 11h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5zM9 15.75c0-.41.34-.75.75-.75h5.75a.75.75 0 010 1.5H9.75a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Channel28Filled = wrapIcon(rawSvg({}), 'Channel28Filled');
export default Channel28Filled;
      