import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 3.25a1 1 0 011.7.71V7.5C9 8.33 8.33 9 7.5 9H3.96a1 1 0 01-.7-1.7L7.3 3.25zm.7.71L3.96 8H7.5a.5.5 0 00.5-.5V3.96z" fill={primaryFill} /></svg>;
}

const CaretDownLeft12Regular = wrapIcon(rawSvg({}), 'CaretDownLeft12Regular');
export default CaretDownLeft12Regular;
      