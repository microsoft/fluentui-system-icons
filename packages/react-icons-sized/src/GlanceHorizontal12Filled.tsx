import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 6A1.5 1.5 0 011 4.5v-2C1 1.67 1.67 1 2.5 1h3C6.33 1 7 1.67 7 2.5v2C7 5.33 6.33 6 5.5 6h-3zm4 5A1.5 1.5 0 015 9.5v-1C5 7.67 5.67 7 6.5 7h3c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-3zM8 4.5a1.5 1.5 0 103 0v-2a1.5 1.5 0 00-3 0v2zM2.5 11A1.5 1.5 0 011 9.5v-1a1.5 1.5 0 113 0v1c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /></svg>;
}

const GlanceHorizontal12Filled = wrapIcon(rawSvg({}), 'GlanceHorizontal12Filled');
export default GlanceHorizontal12Filled;
      