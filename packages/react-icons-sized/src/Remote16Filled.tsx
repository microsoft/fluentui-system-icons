import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.8 3.26a.75.75 0 10-1.1-1.02l-4 4.25a.75.75 0 000 1.02l4 4.25a.75.75 0 101.1-1.02L10.28 7l3.52-3.74zm-10.5.98a.75.75 0 10-1.1 1.02L5.72 9 2.2 12.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25z" fill={primaryFill} /></svg>;
}

const Remote16Filled = wrapIcon(rawSvg({}), 'Remote16Filled');
export default Remote16Filled;
      