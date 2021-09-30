import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 2c.97 0 1.75.78 1.75 1.75v16.5c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 22 7 21.22 7 20.25V3.75C7 2.78 7.78 2 8.75 2h6.5zm-3 6H8.5v1.5h3.75a.75.75 0 000-1.5zm-1.92 3.25H8.5v1.5h1.83a.75.75 0 000-1.5zm1.92 3.25H8.5V16h3.75a.75.75 0 000-1.5zm-1.92 3H8.5V19h1.83a.75.75 0 000-1.5zm0-12.5H8.5v1.5h1.83a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const Ruler24Filled = wrapIcon(rawSvg({}), 'Ruler24Filled');
export default Ruler24Filled;
      