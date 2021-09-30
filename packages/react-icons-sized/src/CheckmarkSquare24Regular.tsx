import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.28 9.78a.75.75 0 00-1.06-1.06l-4.47 4.47-1.47-1.47a.75.75 0 00-1.06 1.06l2 2c.3.3.77.3 1.06 0l5-5zM6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v11.5c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25z" fill={primaryFill} /></svg>;
}

const CheckmarkSquare24Regular = wrapIcon(rawSvg({}), 'CheckmarkSquare24Regular');
export default CheckmarkSquare24Regular;
      