import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.84 1.23a.5.5 0 10-.83.54L8.1 5h1.2L6.83 1.23zm-2.8 0L6.5 4.99H5.3L3.2 1.77a.5.5 0 01.84-.54zM14.3 5.99c.39 0 .7.32.7.7V8c0 .35-.02.68-.07 1H1.07A7.07 7.07 0 011 8V6.7c0-.38.31-.7.7-.7h12.6zM1.29 10a7.02 7.02 0 003.06 3.98H2.22a.5.5 0 000 1h5.19a7.1 7.1 0 001.18 0h5.19a.5.5 0 000-1h-2.13A7.02 7.02 0 0014.7 10H1.29z" fill={primaryFill} /></svg>;
}

const BowlChopsticks16Filled = wrapIcon(rawSvg({}), 'BowlChopsticks16Filled');
export default BowlChopsticks16Filled;
      