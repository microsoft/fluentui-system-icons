import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5C3 2.67 3.67 2 4.5 2h3C8.33 2 9 2.67 9 3.5V4h.5c.83 0 1.5.67 1.5 1.5V7H8v-.5a.5.5 0 00-1 0V7H5v-.5a.5.5 0 00-1 0V7H1V5.5C1 4.67 1.67 4 2.5 4H3v-.5zM4.5 3a.5.5 0 00-.5.5V4h4v-.5a.5.5 0 00-.5-.5h-3zM11 8H8v.5a.5.5 0 01-1 0V8H5v.5a.5.5 0 01-1 0V8H1v1.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V8z" fill={primaryFill} /></svg>;
}

const Toolbox12Filled = wrapIcon(rawSvg({}), 'Toolbox12Filled');
export default Toolbox12Filled;
      