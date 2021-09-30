import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 2C5.51 2 4.5 3 4.5 4.25v16.5c0 .41.34.75.75.75H7.5v-4.25c0-.41.34-.75.75-.75h7.5c.41 0 .75.34.75.75v4.25h2.25c.41 0 .75-.34.75-.75v-9c0-1.24-1-2.25-2.25-2.25h-.75V4.25c0-1.24-1-2.25-2.25-2.25h-7.5zm.75 4.5a1 1 0 112 0 1 1 0 01-2 0zm1 6a1 1 0 110 2 1 1 0 010-2zm-1-2.5a1 1 0 112 0 1 1 0 01-2 0zM12 5.5a1 1 0 110 2 1 1 0 010-2zm-1 8a1 1 0 112 0 1 1 0 01-2 0zm4.5-1a1 1 0 110 2 1 1 0 010-2zM11 10a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /><path d="M15 21.5V18h-2.25v3.5H15z" fill={primaryFill} /><path d="M11.25 21.5V18H9v3.5h2.25z" fill={primaryFill} /></svg>;
}

const Building24Filled = wrapIcon(rawSvg({}), 'Building24Filled');
export default Building24Filled;
      