import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.7 4.28a1 1 0 10-1.4 1.43L17.67 11H4a1 1 0 100 2h13.66l-5.36 5.28a1 1 0 001.4 1.43l6.93-6.82c.5-.5.5-1.3 0-1.78L13.7 4.28z" fill={primaryFill} /></svg>;
}

const ArrowRight24Filled = wrapIcon(rawSvg({}), 'ArrowRight24Filled');
export default ArrowRight24Filled;
      