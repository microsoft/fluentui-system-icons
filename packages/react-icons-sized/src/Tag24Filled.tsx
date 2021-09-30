import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-8.5 8.5a3.25 3.25 0 01-4.6 0L3.5 16.06a3.25 3.25 0 010-4.6l8.5-8.5a3.25 3.25 0 012.3-.96h5.46zM17 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const Tag24Filled = wrapIcon(rawSvg({}), 'Tag24Filled');
export default Tag24Filled;
      