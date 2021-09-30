import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.12 2.1a.75.75 0 011.03.27L14.08 9h7.16c.42 0 .76.34.76.76V12a10 10 0 01-4.73 8.5h2.98a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h2.98A10 10 0 012 12V9.76c0-.42.34-.76.76-.76h5.57L4.85 3.13a.75.75 0 011.3-.76L10.08 9h2.25L8.85 3.13a.75.75 0 01.27-1.03zM3.5 10.5V12c0 .34.02.67.06 1h16.88c.04-.33.06-.66.06-1v-1.5h-17zm.37 4a8.5 8.5 0 0016.26 0H3.87z" fill={primaryFill} /></svg>;
}

const BowlChopsticks24Regular = wrapIcon(rawSvg({}), 'BowlChopsticks24Regular');
export default BowlChopsticks24Regular;
      