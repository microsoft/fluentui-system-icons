import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 17.9a1.25 1.25 0 002.07.94l6.31-5.52c.8-.7.8-1.94 0-2.64l-6.3-5.52C10.25 4.46 9 5.03 9 6.1v11.8z" fill={primaryFill} /></svg>;
}

const CaretRight24Filled = wrapIcon(rawSvg({}), 'CaretRight24Filled');
export default CaretRight24Filled;
      