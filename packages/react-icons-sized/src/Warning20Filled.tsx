import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.69 2.85L2.13 14.78A1.5 1.5 0 003.44 17h13.12a1.5 1.5 0 001.31-2.22L11.31 2.85a1.5 1.5 0 00-2.62 0zM10 6.75c.41 0 .75.34.75.75v4a.75.75 0 01-1.5 0v-4c0-.41.34-.75.75-.75zm.75 7a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const Warning20Filled = wrapIcon(rawSvg({}), 'Warning20Filled');
export default Warning20Filled;
      