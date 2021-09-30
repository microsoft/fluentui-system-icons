import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4zM3 5a1 1 0 011-1h2v8H4a1 1 0 01-1-1V5zm4 7V4h5a1 1 0 011 1v6a1 1 0 01-1 1H7z" fill={primaryFill} /></svg>;
}

const DockPanelLeft16Regular = wrapIcon(rawSvg({}), 'DockPanelLeft16Regular');
export default DockPanelLeft16Regular;
      