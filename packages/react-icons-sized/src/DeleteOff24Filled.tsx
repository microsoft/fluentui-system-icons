import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.94 5L2.22 3.28a.75.75 0 011.06-1.06l18.5 18.5a.75.75 0 01-1.06 1.06l-2.3-2.3v.04A2.75 2.75 0 0115.7 22H8.3a2.75 2.75 0 01-2.73-2.48L4.34 7H3.5a1 1 0 010-2h.44zM15 16.06l-1.5-1.5v2.54a.75.75 0 001.5 0v-1.04zm-4.5-4.5L9 10.06v7.04a.75.75 0 001.5 0v-5.54z" fill={primaryFill} /><path d="M15 10v1.82l3.8 3.8.86-8.62h.96a1 1 0 00-.12-2h-5a3.5 3.5 0 10-7 0h-.32l5.32 5.32V9.9a.75.75 0 011.5 0v.1zm-3-6.5c.83 0 1.5.67 1.5 1.5h-3c0-.83.67-1.5 1.5-1.5z" fill={primaryFill} /></svg>;
}

const DeleteOff24Filled = wrapIcon(rawSvg({}), 'DeleteOff24Filled');
export default DeleteOff24Filled;
      