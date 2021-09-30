import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.7 4.26a.75.75 0 111.1-1.02l4 4.25c.27.29.27.73 0 1.02l-4 4.25a.75.75 0 11-1.1-1.02L11.23 8 7.7 4.26zm-4 0a.75.75 0 111.1-1.02l4 4.25c.27.29.27.73 0 1.02l-4 4.25a.75.75 0 11-1.1-1.02L7.23 8 3.7 4.26z" fill={primaryFill} /></svg>;
}

const ChevronDoubleRight16Filled = wrapIcon(rawSvg({}), 'ChevronDoubleRight16Filled');
export default ChevronDoubleRight16Filled;
      