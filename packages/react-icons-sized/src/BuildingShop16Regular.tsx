import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 9.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm1 1.5h1v-1h-1v1z" fill={primaryFill} /><path d="M4.19 1.11l-2.5 2c-.17.13-.19.36-.19.56V5.5c0 .56.19 1.08.5 1.5v7.5c0 .28.22.5.5.5h11a.5.5 0 00.5-.5V7c.31-.42.5-.94.5-1.5V3.67c0-.2-.02-.43-.19-.56l-2.5-2A.5.5 0 0011.5 1h-7a.5.5 0 00-.31.11zM5.5 4v1.5a1.5 1.5 0 11-3 0V4h3zm4 0v1.5a1.5 1.5 0 11-3 0V4h3zm4 0v1.5a1.5 1.5 0 01-3 0V4h3zM6.03 2l-.38 1H3.43l1.25-1h1.35zm.7 1l.37-1h1.79l.33 1h-2.5zm3.21-1h1.38l1.25 1h-2.3l-.33-1zM13 7.8V14H8V9.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V14H3V7.8A2.5 2.5 0 006 7a2.5 2.5 0 004 0 2.5 2.5 0 003 .8zM7 14H5v-4h2v4z" fill={primaryFill} /></svg>;
}

const BuildingShop16Regular = wrapIcon(rawSvg({}), 'BuildingShop16Regular');
export default BuildingShop16Regular;
      