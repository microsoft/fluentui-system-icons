import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v6c0 .65.2 1.25.55 1.74L7.6 9.7a2 2 0 012.82 0l4.04 4.03c.34-.5.55-1.1.55-1.74V6a3 3 0 00-3-3H6zm6.5 3.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M13.74 14.45L9.7 10.4a1 1 0 00-1.42 0l-4.03 4.04c.5.34 1.1.55 1.74.55h6c.65 0 1.25-.2 1.74-.55z" fill={primaryFill} /><path d="M5.76 16A3 3 0 008 17h4.5a4.5 4.5 0 004.5-4.5V8a3 3 0 00-1-2.24v6.74c0 .12 0 .24-.02.36A3.5 3.5 0 0112.5 16H5.76z" fill={primaryFill} /></svg>;
}

const ImageMultipleFilled = wrapIcon(rawSvg({}), 'ImageMultipleFilled');
export default ImageMultipleFilled;
      