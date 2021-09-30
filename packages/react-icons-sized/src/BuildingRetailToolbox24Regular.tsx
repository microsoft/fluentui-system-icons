import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 8a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h6.44c.26-.66.77-1.2 1.41-1.5H7.5v-2h9v1.75H18v-2.5a.75.75 0 00-.75-.75H6.75zm4.75 6.75V15c-.31.42-.5.94-.5 1.5V21H3.75a.75.75 0 01-.75-.75V6.73A2 2 0 014 3h16a2 2 0 011 3.73v5.15a2.74 2.74 0 00-1.5-.62V7h-15v12.5H6v-4.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75zM3.5 5c0 .28.22.5.5.5h16a.5.5 0 000-1H4a.5.5 0 00-.5.5zM10 19.5v-4H7.5v4H10zm4-4.5h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zM12 21.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const BuildingRetailToolbox24Regular = wrapIcon(rawSvg({}), 'BuildingRetailToolbox24Regular');
export default BuildingRetailToolbox24Regular;
      