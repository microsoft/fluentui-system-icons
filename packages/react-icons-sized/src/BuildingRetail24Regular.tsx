import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 8a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-.75-.75H6.75zm.75 3.5v-2h9v2h-9z" fill={primaryFill} /><path d="M13.75 14a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-2.5a.75.75 0 00-.75-.75h-3.5zm.75 2.5v-1h2v1h-2z" fill={primaryFill} /><path d="M4 3a2 2 0 00-1 3.73v13.52c0 .41.34.75.75.75h16.5c.41 0 .75-.34.75-.75V6.73A2 2 0 0020 3H4zm15.5 4v12.5h-8v-4.75a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v4.75H4.5V7h15zm-16-2c0-.28.22-.5.5-.5h16a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM10 19.5H7.5v-4H10v4z" fill={primaryFill} /></svg>;
}

const BuildingRetail24Regular = wrapIcon(rawSvg({}), 'BuildingRetail24Regular');
export default BuildingRetail24Regular;
      