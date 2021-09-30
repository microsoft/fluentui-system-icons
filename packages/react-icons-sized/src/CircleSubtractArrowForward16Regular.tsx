import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3a5 5 0 000 10h.03c.04.34.11.68.22 1H8a6 6 0 116-5.75 4.47 4.47 0 00-1-.22V8a5 5 0 00-5-5zm2.44 5.5c.33-.17.68-.3 1.05-.39A.5.5 0 0011 7.5H5a.5.5 0 000 1h5.44zM12.5 16a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm.65-4.85a.5.5 0 000 .7l.14.15h-2.04c-.69 0-1.25.56-1.25 1.25v.25a.5.5 0 001 0v-.25c0-.14.11-.25.25-.25h2.04l-.14.15a.5.5 0 00.7.7l1-1a.5.5 0 000-.7l-1-1a.5.5 0 00-.7 0z" fill={primaryFill} /></svg>;
}

const CircleSubtractArrowForward16Regular = wrapIcon(rawSvg({}), 'CircleSubtractArrowForward16Regular');
export default CircleSubtractArrowForward16Regular;
      