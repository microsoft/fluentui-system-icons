import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 11.5v-2h9v2h-9zM4 3a2 2 0 00-1 3.73v13.52c0 .41.34.75.75.75H6v-5.25c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75V16c.46-.6 1.18-1 2-1H21V6.73A2 2 0 0020 3H4zm-.5 2c0-.28.22-.5.5-.5h16a.5.5 0 010 1H4a.5.5 0 01-.5-.5zm3.25 3h10.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75H6.75a.75.75 0 01-.75-.75v-3.5c0-.41.34-.75.75-.75zM10 16.5V21H7.5v-4.5H10zm2 1c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5v-4zm10 .5a1 1 0 01-1-1h-1c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2h-1zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const BuildingRetailMoney24Filled = wrapIcon(rawSvg({}), 'BuildingRetailMoney24Filled');
export default BuildingRetailMoney24Filled;
      