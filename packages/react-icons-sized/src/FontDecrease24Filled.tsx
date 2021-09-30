import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.62 2.22a1 1 0 10-1.24 1.56l2.5 2a1 1 0 001.24 0l2.5-2a1 1 0 00-1.24-1.56l-1.88 1.5-1.88-1.5zM12 4a1 1 0 01.92.6l6 14a1 1 0 01-1.84.8L15.2 15H8.8l-1.88 4.4a1 1 0 01-1.84-.8l6-14A1 1 0 0112 4zm0 3.54L9.66 13h4.68L12 7.54z" fill={primaryFill} /></svg>;
}

const FontDecrease24Filled = wrapIcon(rawSvg({}), 'FontDecrease24Filled');
export default FontDecrease24Filled;
      