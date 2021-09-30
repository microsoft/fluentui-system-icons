import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 13.02v1.48a.5.5 0 001 0v-1.48a4.89 4.89 0 002.77-8.49l-2.43-2.2a1.25 1.25 0 00-1.68 0l-2.43 2.2a4.89 4.89 0 002.77 8.5zm3.1-7.74a3.89 3.89 0 01-2.1 6.74V7.5a.5.5 0 00-1 0v4.52a3.89 3.89 0 01-2.1-6.74l2.43-2.2c.1-.09.24-.09.34 0l2.43 2.2z" fill={primaryFill} /></svg>;
}

const LeafOne16Regular = wrapIcon(rawSvg({}), 'LeafOne16Regular');
export default LeafOne16Regular;
      