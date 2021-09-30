import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.35 3.15c.2.2.2.5 0 .7L6.21 8l4.14 4.15a.5.5 0 01-.7.7l-4.5-4.5a.5.5 0 010-.7l4.5-4.5c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const ChevronLeft16Regular = wrapIcon(rawSvg({}), 'ChevronLeft16Regular');
export default ChevronLeft16Regular;
      