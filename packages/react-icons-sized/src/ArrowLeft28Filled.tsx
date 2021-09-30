import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.3 4.29a1 1 0 011.4 1.42L6.33 13H24a1 1 0 110 2H6.33l7.37 7.29a1 1 0 01-1.4 1.42l-8.93-8.82c-.5-.5-.5-1.3 0-1.78l8.93-8.82z" fill={primaryFill} /></svg>;
}

const ArrowLeft28Filled = wrapIcon(rawSvg({}), 'ArrowLeft28Filled');
export default ArrowLeft28Filled;
      