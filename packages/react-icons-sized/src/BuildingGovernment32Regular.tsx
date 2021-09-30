import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 14a1 1 0 10-2 0v3a1 1 0 102 0v-3z" fill={primaryFill} /><path d="M16 13a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z" fill={primaryFill} /><path d="M13 14a1 1 0 10-2 0v3a1 1 0 102 0v-3z" fill={primaryFill} /><path d="M8 20a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1z" fill={primaryFill} /><path d="M25 21a1 1 0 10-2 0v3a1 1 0 002 0v-3z" fill={primaryFill} /><path d="M16 2h4.67c.37 0 .66.3.66.67v2.66c0 .37-.3.67-.66.67H17v1.05A9 9 0 0125 16h2a3 3 0 013 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9a3 3 0 013-3h2a9 9 0 018-8.95V3a1 1 0 011-1zm0 7a7 7 0 00-7 7v1a1 1 0 01-1 1H5a1 1 0 00-1 1v8h8.5v-3a1 1 0 011-1h5a1 1 0 011 1v3H28v-8a1 1 0 00-1-1h-3a1 1 0 01-1-1v-1a7 7 0 00-7-7zm1.5 16h-3v2h3v-2z" fill={primaryFill} /></svg>;
}

const BuildingGovernment32Regular = wrapIcon(rawSvg({}), 'BuildingGovernment32Regular');
export default BuildingGovernment32Regular;
      