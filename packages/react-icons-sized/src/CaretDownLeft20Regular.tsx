import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.3 5.25a1 1 0 011.7.7v7.55c0 .83-.67 1.5-1.5 1.5H5.96a1 1 0 01-.71-1.7l8.04-8.05zm.7.7L5.96 14h7.54a.5.5 0 00.5-.5V5.96z" fill={primaryFill} /></svg>;
}

const CaretDownLeft20Regular = wrapIcon(rawSvg({}), 'CaretDownLeft20Regular');
export default CaretDownLeft20Regular;
      