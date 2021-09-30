import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5zm1 2.5v-2h2v2h-2z" fill={primaryFill} /><path d="M5 2a.5.5 0 00-.38.18l-2.5 3A.5.5 0 002 5.5V7a3 3 0 001 2.24v8.26c0 .28.22.5.5.5h13a.5.5 0 00.5-.5V9.24A3 3 0 0018 7V5.5v-.02c0-.09 0-.16-.12-.3l-2.5-3A.5.5 0 0015 2H5zm0 7a2 2 0 01-2-2V6h4v1a2 2 0 01-2 2zm5 0a2 2 0 01-2-2V6h4v1a2 2 0 01-2 2zm5 0a2 2 0 01-2-2V6h4v1a2 2 0 01-2 2zM5 17H4V9.83a3 3 0 003.5-1.17 3 3 0 005 0A3 3 0 0016 9.83V17h-6v-5.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V17zM7.14 5H3.57l1.66-2h2.58l-.67 2zm4.67 0H8.19l.67-2h2.28l.67 2zm1.05 0l-.67-2h2.58l1.66 2h-3.57zM6 17v-5h3v5H6z" fill={primaryFill} /></svg>;
}

const BuildingShop20Regular = wrapIcon(rawSvg({}), 'BuildingShop20Regular');
export default BuildingShop20Regular;
      