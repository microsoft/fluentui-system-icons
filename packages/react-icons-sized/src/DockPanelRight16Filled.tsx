import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8zm-3 9V4H4a1 1 0 00-1 1v6a1 1 0 001 1h5z" fill={primaryFill} /></svg>;
}

const DockPanelRight16Filled = wrapIcon(rawSvg({}), 'DockPanelRight16Filled');
export default DockPanelRight16Filled;
      