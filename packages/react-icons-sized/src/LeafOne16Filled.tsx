import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.27 4.54a4.89 4.89 0 01-2.77 8.48v1.48a.5.5 0 11-1 0v-1.48a4.89 4.89 0 01-2.77-8.49l2.43-2.2c.48-.42 1.2-.42 1.68 0l2.43 2.2zM8.5 7.5a.5.5 0 00-1 0v4.52c.33.04.67.04 1 0V7.5z" fill={primaryFill} /></svg>;
}

const LeafOne16Filled = wrapIcon(rawSvg({}), 'LeafOne16Filled');
export default LeafOne16Filled;
      