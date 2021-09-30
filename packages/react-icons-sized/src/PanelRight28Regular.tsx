import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 4A3.75 3.75 0 002 7.75v12.5A3.75 3.75 0 005.75 24h16.5A3.75 3.75 0 0026 20.25V7.75A3.75 3.75 0 0022.25 4H5.75zM3.5 7.75c0-1.24 1.01-2.25 2.25-2.25H17v17H5.75c-1.24 0-2.25-1-2.25-2.25V7.75zm15 14.75v-17h3.75c1.24 0 2.25 1 2.25 2.25v12.5c0 1.24-1 2.25-2.25 2.25H18.5z" fill={primaryFill} /></svg>;
}

const PanelRight28Regular = wrapIcon(rawSvg({}), 'PanelRight28Regular');
export default PanelRight28Regular;
      