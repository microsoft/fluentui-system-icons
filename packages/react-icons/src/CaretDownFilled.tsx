import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.8 7a1 1 0 00-.78 1.63l3.81 4.72c.6.74 1.74.74 2.34 0l3.81-4.72A1 1 0 0014.2 7H5.8z" fill={primaryFill} /></svg>;
}

const CaretDownFilled = wrapIcon(rawSvg({}), 'CaretDownFilled');
export default CaretDownFilled;
      