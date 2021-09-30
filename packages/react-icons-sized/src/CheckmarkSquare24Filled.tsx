import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zm10.03 6.78l-5 5c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.06z" fill={primaryFill} /></svg>;
}

const CheckmarkSquare24Filled = wrapIcon(rawSvg({}), 'CheckmarkSquare24Filled');
export default CheckmarkSquare24Filled;
      