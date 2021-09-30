import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 6.25V7H4.25C3.01 7 2 8 2 9.25v2.25h4.5v-.75a.75.75 0 011.5 0v.75h8v-.75a.75.75 0 011.5 0v.75H22V9.25C22 8.01 21 7 19.75 7H17v-.75C17 5.01 16 4 14.75 4h-5.5C8.01 4 7 5.01 7 6.25zm2.25-.75h5.5c.41 0 .75.34.75.75V7h-7v-.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M22 13h-4.5v1.25a.75.75 0 01-1.5 0V13H8v1.25a.75.75 0 01-1.5 0V13H2v4.75C2 18.99 3 20 4.25 20h15.5c1.24 0 2.25-1.01 2.25-2.25V13z" fill={primaryFill} /></svg>;
}

const Toolbox24Filled = wrapIcon(rawSvg({}), 'Toolbox24Filled');
export default Toolbox24Filled;
      