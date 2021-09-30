import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.35 13.85L9 12.21a.5.5 0 10-.7-.71l-.8.8V6.5a.5.5 0 00-1 0v5.8l-.8-.8a.5.5 0 10-.7.7l1.65 1.65c.2.2.5.2.7 0zM18 10a8 8 0 11-16 0 8 8 0 0116 0zm-4.65 3.85L15 12.21a.5.5 0 10-.7-.71l-.8.8V6.5a.5.5 0 00-1 0v5.8l-.8-.8a.5.5 0 10-.7.7l1.65 1.65c.2.2.5.2.7 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownDouble20Filled = wrapIcon(rawSvg({}), 'ArrowCircleDownDouble20Filled');
export default ArrowCircleDownDouble20Filled;
      