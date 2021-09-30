import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0113 7.5v-3c0-.83.67-1.5 1.5-1.5zm-10 0h5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 013 7.5v-3C3 3.67 3.67 3 4.5 3zm0 8h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 013 15.5v-3c0-.83.67-1.5 1.5-1.5zM9 12.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 019 15.5v-3z" fill={primaryFill} /></svg>;
}

const GlanceHorizontalFilled = wrapIcon(rawSvg({}), 'GlanceHorizontalFilled');
export default GlanceHorizontalFilled;
      