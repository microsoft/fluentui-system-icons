import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.5C1 2.67 1.67 2 2.5 2h11c.83 0 1.5.67 1.5 1.5v3a.5.5 0 01-.5.5H8.51v1h.99c.28 0 .5.22.5.5V10h1c.28 0 .5.22.5.5v1h3a.5.5 0 010 1h-3v1a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5v-1h-3a.5.5 0 010-1h3v-1c0-.28.22-.5.5-.5h1V8.5a.5.5 0 01.5-.5h1.01V7H1.5a.5.5 0 01-.5-.5v-3zM12.5 5a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const MapDrive16Filled = wrapIcon(rawSvg({}), 'MapDrive16Filled');
export default MapDrive16Filled;
      