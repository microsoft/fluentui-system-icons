import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-6-1.8v4.8a.5.5 0 001 0V4.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 00.7.7L16 4.71zm6 15.55V9.97a6.5 6.5 0 01-9.26 1.83v10.18L13 22h7.25c.96 0 1.75-.78 1.75-1.75zm-7.26-2.75h1.6a.75.75 0 010 1.5H14.64a.75.75 0 010-1.5h.1zM10 6.5c0-.17 0-.33.02-.5H3.75C2.78 6 2 6.78 2 7.75v12.5C2 21.2 2.78 22 3.75 22H11c.08 0 .16 0 .24-.02V10.32A6.47 6.47 0 0110 6.5zm-2.26 11h1.6a.75.75 0 010 1.5H7.64a.75.75 0 010-1.5h.1z" fill={primaryFill} /></svg>;
}

const DualScreenArrowUp24Filled = wrapIcon(rawSvg({}), 'DualScreenArrowUp24Filled');
export default DualScreenArrowUp24Filled;
      