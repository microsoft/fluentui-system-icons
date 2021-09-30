import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.63 8L7.57 2.75a.5.5 0 11.86-.5L11.8 8h5.41c.44 0 .8.36.8.8V10a8 8 0 01-4.12 7h2.62a.5.5 0 110 1h-13a.5.5 0 010-1h2.62A8 8 0 012 10V8.8c0-.44.36-.8.8-.8h4.83L4.57 2.75a.5.5 0 11.86-.5L8.8 8h1.84zM3 9v1c0 .34.02.67.07 1h13.86c.05-.33.07-.66.07-1V9H3zm.29 3a7 7 0 006.69 5h.04a7 7 0 006.69-5H3.29z" fill={primaryFill} /></svg>;
}

const BowlChopsticks20Regular = wrapIcon(rawSvg({}), 'BowlChopsticks20Regular');
export default BowlChopsticks20Regular;
      