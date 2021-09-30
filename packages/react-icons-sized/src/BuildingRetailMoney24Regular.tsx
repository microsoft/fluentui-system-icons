import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 8a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75H6.75zm.75 3.5v-2h9v2h-9zm6.25 2.5a.75.75 0 00-.75.75v.3c.16-.03.33-.05.5-.05H18v-.25a.75.75 0 00-.75-.75h-3.5zm-2.25.75V16c-.31.42-.5.94-.5 1.5V21H3.75a.75.75 0 01-.75-.75V6.73A2 2 0 014 3h16a2 2 0 011 3.73V15h-1.5V7h-15v12.5H6v-4.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75zM3.5 5c0 .28.22.5.5.5h16a.5.5 0 000-1H4a.5.5 0 00-.5.5zM10 19.5v-4H7.5v4H10zm2-2c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5v-4zm10 .5a1 1 0 01-1-1h-1c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2h-1zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const BuildingRetailMoney24Regular = wrapIcon(rawSvg({}), 'BuildingRetailMoney24Regular');
export default BuildingRetailMoney24Regular;
      