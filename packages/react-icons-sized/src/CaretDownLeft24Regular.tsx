import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 7.81l-8.69 8.7h8.44c.14-.01.25-.12.25-.26V7.81zm-.63-1.49a1.25 1.25 0 012.13.89v9.04c0 .97-.78 1.75-1.75 1.75H7.21a1.25 1.25 0 01-.89-2.13l9.55-9.55z" fill={primaryFill} /></svg>;
}

const CaretDownLeft24Regular = wrapIcon(rawSvg({}), 'CaretDownLeft24Regular');
export default CaretDownLeft24Regular;
      