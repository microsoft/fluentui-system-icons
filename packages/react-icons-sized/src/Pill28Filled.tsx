import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.78 3.74a6 6 0 018.48 8.5L12.22 24.26a6 6 0 01-8.48-8.5L15.78 3.74zm1.93 12.91l5.49-5.48a4.5 4.5 0 00-6.36-6.36l-5.5 5.48 6.37 6.36zm-5.93 4.63a.75.75 0 10-1.06-1.06L8.74 22.2c-.4.4-1.07.4-1.48 0l-.48-.48a.75.75 0 00-1.06 1.06l.48.48c1 1 2.6 1 3.6 0l1.98-1.98z" fill={primaryFill} /></svg>;
}

const Pill28Filled = wrapIcon(rawSvg({}), 'Pill28Filled');
export default Pill28Filled;
      