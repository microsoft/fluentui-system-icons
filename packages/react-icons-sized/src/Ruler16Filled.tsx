import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 015 12.5v-9C5 2.67 5.67 2 6.5 2h3zm-2 9a.5.5 0 100-1H6v1h1.5zM8 8.5a.5.5 0 000-1H6v1h2zM7.5 6a.5.5 0 000-1H6v1h1.5z" fill={primaryFill} /></svg>;
}

const Ruler16Filled = wrapIcon(rawSvg({}), 'Ruler16Filled');
export default Ruler16Filled;
      