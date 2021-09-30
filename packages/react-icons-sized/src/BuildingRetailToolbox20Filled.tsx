import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.91A1.5 1.5 0 0016.5 3h-13A1.5 1.5 0 003 5.91V16.5c0 .28.22.5.5.5H5v-4.5c0-.28.22-.5.5-.5h4c.37-.5.91-.84 1.54-.96l.01-.04H5.5a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V9h.5c.56 0 1.08.19 1.5.5V5.91zM3.5 4h13a.5.5 0 010 1h-13a.5.5 0 010-1zM9 13v4H6v-4h3zm4.5-4h.5V8H6v2h5.5c.46-.6 1.18-1 2-1zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const BuildingRetailToolbox20Filled = wrapIcon(rawSvg({}), 'BuildingRetailToolbox20Filled');
export default BuildingRetailToolbox20Filled;
      