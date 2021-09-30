import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.67 2H16a1 1 0 00-1 1v4.05A9 9 0 007 16H5a3 3 0 00-3 3v9a1 1 0 001 1h10v-4a1 1 0 011-1h4a1 1 0 011 1v4h10a1 1 0 001-1v-9a3 3 0 00-3-3h-2a9 9 0 00-8-8.95V6h3.67c.37 0 .66-.3.66-.67V2.67c0-.37-.3-.67-.66-.67zM12 13a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm8 0a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 1v3a1 1 0 11-2 0v-3a1 1 0 112 0zm-9 6a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm16 0a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1z" fill={primaryFill} /></svg>;
}

const BuildingGovernment32Filled = wrapIcon(rawSvg({}), 'BuildingGovernment32Filled');
export default BuildingGovernment32Filled;
      