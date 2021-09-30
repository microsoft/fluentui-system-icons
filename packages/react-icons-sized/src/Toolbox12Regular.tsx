import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.5C1 4.67 1.67 4 2.5 4H3v-.5C3 2.67 3.67 2 4.5 2h3C8.33 2 9 2.67 9 3.5V4h.5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 011 9.5v-4zM9.5 5h-7a.5.5 0 00-.5.5V7h2v-.5a.5.5 0 011 0V7h2v-.5a.5.5 0 011 0V7h2V5.5a.5.5 0 00-.5-.5zM7 8H5v.5a.5.5 0 01-1 0V8H2v1.5c0 .28.22.5.5.5h7a.5.5 0 00.5-.5V8H8v.5a.5.5 0 01-1 0V8zM4 3.5V4h4v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const Toolbox12Regular = wrapIcon(rawSvg({}), 'Toolbox12Regular');
export default Toolbox12Regular;
      