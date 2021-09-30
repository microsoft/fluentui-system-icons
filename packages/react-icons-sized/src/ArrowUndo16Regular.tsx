import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.5a.5.5 0 111 0v3.84l3.17-3.17a4 4 0 015.66 5.66L7.8 13.85a.5.5 0 01-.7-.7l5.02-5.03a3 3 0 00-4.24-4.24L4.76 7H8.5a.5.5 0 010 1H3.6a.6.6 0 01-.6-.6V2.5z" fill={primaryFill} /></svg>;
}

const ArrowUndo16Regular = wrapIcon(rawSvg({}), 'ArrowUndo16Regular');
export default ArrowUndo16Regular;
      