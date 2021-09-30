import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a2 2 0 00-2 2v4c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H3zM2 4a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm1 10v-3h1v3a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-3V4h3a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill={primaryFill} /></svg>;
}

const PanelSeparateWindow20Regular = wrapIcon(rawSvg({}), 'PanelSeparateWindow20Regular');
export default PanelSeparateWindow20Regular;
      