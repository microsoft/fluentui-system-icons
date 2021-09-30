import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.47 7.24l3.06 12.99c.23 1 1.63 1.04 1.93.06l2.94-9.58.39 1.53a1 1 0 00.97.76H21a1 1 0 100-2h-2.47l-1.06-4.24c-.25-.99-1.63-1.02-1.93-.05l-2.91 9.47-3.15-13.4c-.24-1.03-1.7-1.04-1.95-.02L5.47 11H3a1 1 0 000 2h3.25a1 1 0 00.97-.76l1.25-5z" fill={primaryFill} /></svg>;
}

const Pulse24Filled = wrapIcon(rawSvg({}), 'Pulse24Filled');
export default Pulse24Filled;
      