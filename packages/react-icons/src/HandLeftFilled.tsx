import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8.5V2.75a.75.75 0 00-1.5 0V8.5a.5.5 0 01-1 0V3.75a.75.75 0 00-1.5 0v6.5a4.06 4.06 0 00-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 00-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.36.68.59 1.02 1.68 1.02h3.05c.95 0 1.31-.53 1.95-2 .64-1.47 1-2.94 1-3.5V5.25a.75.75 0 00-1.5 0V9a.5.5 0 01-1 0V3.75a.75.75 0 00-1.5 0V8.5a.5.5 0 01-1 0z" fill={primaryFill} /></svg>;
}

const HandLeftFilled = wrapIcon(rawSvg({}), 'HandLeftFilled');
export default HandLeftFilled;
      