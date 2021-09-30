import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.5C4 2.67 4.67 2 5.5 2h5c.83 0 1.5.67 1.5 1.5V4h1a2 2 0 012 2v4.5c0 .83-.67 1.5-1.5 1.5h-1.4v.5c0 .83-.67 1.5-1.5 1.5H5.5A1.5 1.5 0 014 12.5V12H2.5A1.5 1.5 0 011 10.5V6c0-1.1.9-2 2-2h1v-.5zm7 .5v-.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V4h6zM4 5H3a1 1 0 00-1 1v4.5c0 .28.22.5.5.5H4v-.5C4 9.67 4.67 9 5.5 9h5.1c.83 0 1.5.67 1.5 1.5v.5h1.4a.5.5 0 00.5-.5V6a1 1 0 00-1-1H4zm1.5 5a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h5.1a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H5.5z" fill={primaryFill} /></svg>;
}

const Print16Regular = wrapIcon(rawSvg({}), 'Print16Regular');
export default Print16Regular;
      