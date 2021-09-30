import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.2 12.34a4 4 0 111.77-3.87c.36 1.8.5 3.95-.21 5.9-.77 2.09-2.47 3.8-5.5 4.6a1 1 0 01-.51-1.94c2.46-.64 3.6-1.93 4.13-3.35.16-.43.26-.88.32-1.34z" fill={primaryFill} /></svg>;
}

const Comma24Filled = wrapIcon(rawSvg({}), 'Comma24Filled');
export default Comma24Filled;
      