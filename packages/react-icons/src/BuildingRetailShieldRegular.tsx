import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3A1.5 1.5 0 003 5.91V16.5c0 .28.22.5.5.5H10v-4.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V16H4V6h12v2.4l.15.14c.22.23.51.49.85.73V5.9A1.5 1.5 0 0016.5 3h-13zM3 4.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM9 16H6v-3h3v3zm6-7.94V7.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h4.58a1.6 1.6 0 011.14-1H6V8h8v.4c.29-.22.64-.34 1-.34zm3.5 2.9a5.69 5.69 0 01-3.06-1.72.62.62 0 00-.88 0 5.7 5.7 0 01-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 00.26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54z" fill={primaryFill} /></svg>;
}

const BuildingRetailShieldRegular = wrapIcon(rawSvg({}), 'BuildingRetailShieldRegular');
export default BuildingRetailShieldRegular;
      