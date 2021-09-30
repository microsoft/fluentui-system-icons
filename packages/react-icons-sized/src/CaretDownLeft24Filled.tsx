import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 7.2a1.25 1.25 0 00-2.13-.88l-9.55 9.55c-.78.78-.23 2.13.89 2.13h9.04c.97 0 1.75-.78 1.75-1.75V7.21z" fill={primaryFill} /></svg>;
}

const CaretDownLeft24Filled = wrapIcon(rawSvg({}), 'CaretDownLeft24Filled');
export default CaretDownLeft24Filled;
      