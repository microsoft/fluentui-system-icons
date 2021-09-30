import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.62 5.78a1 1 0 01-1.24-1.56l2.5-2a1 1 0 011.24 0l2.5 2a1 1 0 01-1.24 1.56l-1.88-1.5-1.88 1.5zm-3.7-1.17a1 1 0 00-1.84 0l-6 14a1 1 0 001.84.78L8.8 15h6.4l1.88 4.4a1 1 0 001.84-.8l-6-14zM12 7.54L14.34 13H9.66L12 7.54z" fill={primaryFill} /></svg>;
}

const FontIncrease24Filled = wrapIcon(rawSvg({}), 'FontIncrease24Filled');
export default FontIncrease24Filled;
      