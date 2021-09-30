import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 10v1h1v-1h-1z" fill={primaryFill} /><path d="M4.19 1.11l-2.5 2c-.17.13-.19.36-.19.56V5.5c0 .56.19 1.08.5 1.5v7.5c0 .28.22.5.5.5H4V9.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V15h5.5a.5.5 0 00.5-.5V7c.31-.42.5-.94.5-1.5V3.67c0-.2-.02-.43-.19-.56l-2.5-2A.5.5 0 0011.5 1h-7a.5.5 0 00-.31.11zM2.5 5.5V4h3v1.5a1.5 1.5 0 11-3 0zm4 0V4h3v1.5a1.5 1.5 0 11-3 0zm4 0V4h3v1.5a1.5 1.5 0 01-3 0zM3.43 3l1.25-1h1.35l-.38 1H3.43zm3.3 0l.37-1h1.79l.33 1h-2.5zm3.21-1h1.38l1.25 1h-2.3l-.33-1zM9 9.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /><path d="M5 15h2v-5H5v5z" fill={primaryFill} /></svg>;
}

const BuildingShop16Filled = wrapIcon(rawSvg({}), 'BuildingShop16Filled');
export default BuildingShop16Filled;
      