import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 1112 .25 4.5 4.5 0 00-2.51-.14.5.5 0 00-.49-.61H5a.5.5 0 000 1h5.44A4.5 4.5 0 008.25 14H8a6 6 0 01-6-6zm7 4.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm4.15-.65a.5.5 0 01.7-.7l1 1c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l.14-.15h-2.04a.25.25 0 00-.25.25v.25a.5.5 0 01-1 0v-.25c0-.69.56-1.25 1.25-1.25h2.04l-.14-.15z" fill={primaryFill} /></svg>;
}

const CircleSubtractArrowForward16Filled = wrapIcon(rawSvg({}), 'CircleSubtractArrowForward16Filled');
export default CircleSubtractArrowForward16Filled;
      