import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.15 2.37a.75.75 0 00-1.3.76L7.74 8h1.74L6.15 2.37zm4 0L13.48 8h-1.74L8.85 3.13a.75.75 0 011.3-.76zM2.76 9a.76.76 0 00-.76.76V12h20V9.76a.76.76 0 00-.76-.76H2.76zm-.65 4.5a10 10 0 004.62 7H3.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-2.98a10 10 0 004.62-7H2.1z" fill={primaryFill} /></svg>;
}

const BowlChopsticks24Filled = wrapIcon(rawSvg({}), 'BowlChopsticks24Filled');
export default BowlChopsticks24Filled;
      