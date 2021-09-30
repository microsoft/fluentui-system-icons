import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.96a1 1 0 00-1.7-.71l-8.05 8.04a1 1 0 00.7 1.71h7.55c.83 0 1.5-.67 1.5-1.5V5.96z" fill={primaryFill} /></svg>;
}

const CaretDownLeft20Filled = wrapIcon(rawSvg({}), 'CaretDownLeft20Filled');
export default CaretDownLeft20Filled;
      