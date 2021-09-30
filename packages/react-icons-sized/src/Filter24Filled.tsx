import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16h4a1 1 0 01.12 2H10a1 1 0 01-.12-2H14h-4zm-2-5h8a1 1 0 01.12 2H8a1 1 0 01-.12-2H16 8zM5 6h14a1 1 0 01.12 2H5a1 1 0 01-.12-2H19 5z" fill={primaryFill} /></svg>;
}

const Filter24Filled = wrapIcon(rawSvg({}), 'Filter24Filled');
export default Filter24Filled;
      