import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h5.77A6.5 6.5 0 0121 12.02V6.25C21 4.45 19.54 3 17.75 3H6.25zM12 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm6.65-2.15a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65h-2.04C16.01 17 15 18 15 19.25v.25a.5.5 0 01-1 0v-.25c0-1.8 1.46-3.25 3.25-3.25h2.04l-.64-.65z" fill={primaryFill} /></svg>;
}

const SquareArrowForward24Filled = wrapIcon(rawSvg({}), 'SquareArrowForward24Filled');
export default SquareArrowForward24Filled;
      