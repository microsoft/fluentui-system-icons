import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 11.5v-2h9v1.75h-.75c-.4 0-.8.09-1.15.25H7.5zM18 8.75v2.5h1.25c.66 0 1.27.24 1.75.63V6.73A2 2 0 0020 3H4a2 2 0 00-1 3.73v13.52c0 .41.34.75.75.75H6v-5.25c0-.41.34-.75.75-.75h4c.23 0 .44.1.57.27A2.5 2.5 0 0113 14.05V14c0-.35.07-.69.19-1H6.75a.75.75 0 01-.75-.75v-3.5c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75zM3.5 5c0-.28.22-.5.5-.5h16a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM10 16.5V21H7.5v-4.5H10zm4-1.5h-.5c-.83 0-1.5.67-1.5 1.5V18h2.5v-.25a.75.75 0 011.5 0V18h3v-.25a.75.75 0 011.5 0V18H23v-1.5c0-.83-.67-1.5-1.5-1.5H21v-1c0-.97-.78-1.75-1.75-1.75h-3.5c-.97 0-1.75.78-1.75 1.75v1zm1.5-1c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v1h-4v-1zM12 21.5v-2h2.5v.75a.75.75 0 001.5 0v-.75h3v.75a.75.75 0 001.5 0v-.75H23v2c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /></svg>;
}

const BuildingRetailToolbox24Filled = wrapIcon(rawSvg({}), 'BuildingRetailToolbox24Filled');
export default BuildingRetailToolbox24Filled;
      