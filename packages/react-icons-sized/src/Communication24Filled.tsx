import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5a8 8 0 00-5.66 13.65 1 1 0 11-1.42 1.41 10 10 0 1114.16 0 1 1 0 01-1.42-1.4A8 8 0 0012 5z" fill={primaryFill} /><path d="M12 11a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /><path d="M8 13a4 4 0 116.83 2.83 1 1 0 001.41 1.41A5.98 5.98 0 0012 7a6 6 0 00-4.24 10.24 1 1 0 101.41-1.41A3.98 3.98 0 018 13z" fill={primaryFill} /></svg>;
}

const Communication24Filled = wrapIcon(rawSvg({}), 'Communication24Filled');
export default Communication24Filled;
      