import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 4.5c0 .65-.42 1.2-1 1.41v3.36c-.34-.24-.63-.5-.85-.73A1.6 1.6 0 0015 8.06V7.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h4.58a1.5 1.5 0 00-.08.5V13v-.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V17H3.5a.5.5 0 01-.5-.5V5.91A1.5 1.5 0 013.5 3h13c.83 0 1.5.67 1.5 1.5zm-15 0c0 .28.22.5.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5zM14 8v.4l-.15.14A4.71 4.71 0 0111.22 10H6V8h8zm-5 5H6v4h3v-4zm9.5-2.04a5.69 5.69 0 01-3.06-1.72.62.62 0 00-.88 0 5.7 5.7 0 01-3.06 1.72c-.27.04-.5.26-.5.54V14c0 3.47 3.18 4.73 3.87 4.96a.4.4 0 00.26 0c.69-.23 3.87-1.5 3.87-4.96v-2.5c0-.28-.23-.5-.5-.54z" fill={primaryFill} /></svg>;
}

const BuildingRetailShieldFilled = wrapIcon(rawSvg({}), 'BuildingRetailShieldFilled');
export default BuildingRetailShieldFilled;
      