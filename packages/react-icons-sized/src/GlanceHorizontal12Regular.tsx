import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 6A1.5 1.5 0 011 4.5v-2C1 1.67 1.67 1 2.5 1h3C6.33 1 7 1.67 7 2.5v2C7 5.33 6.33 6 5.5 6h-3zM2 4.5c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v2zM6.5 11A1.5 1.5 0 015 9.5v-1C5 7.67 5.67 7 6.5 7h3c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-3zM6 9.5c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v1zm2-5a1.5 1.5 0 103 0v-2a1.5 1.5 0 00-3 0v2zm1.5.5a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zm-7 6A1.5 1.5 0 011 9.5v-1a1.5 1.5 0 113 0v1c0 .83-.67 1.5-1.5 1.5zM2 9.5a.5.5 0 001 0v-1a.5.5 0 00-1 0v1z" fill={primaryFill} /></svg>;
}

const GlanceHorizontal12Regular = wrapIcon(rawSvg({}), 'GlanceHorizontal12Regular');
export default GlanceHorizontal12Regular;
      