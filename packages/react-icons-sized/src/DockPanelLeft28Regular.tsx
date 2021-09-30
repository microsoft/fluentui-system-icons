import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.25 4A3.75 3.75 0 0126 7.75v12.5A3.75 3.75 0 0122.25 24H5.75A3.75 3.75 0 012 20.25V7.75A3.75 3.75 0 015.75 4h16.5zm2.25 3.75c0-1.24-1-2.25-2.25-2.25H11v17h11.25c1.24 0 2.25-1 2.25-2.25V7.75zM9.5 22.5v-17H5.75c-1.24 0-2.25 1-2.25 2.25v12.5c0 1.24 1.01 2.25 2.25 2.25H9.5z" fill={primaryFill} /></svg>;
}

const DockPanelLeft28Regular = wrapIcon(rawSvg({}), 'DockPanelLeft28Regular');
export default DockPanelLeft28Regular;
      