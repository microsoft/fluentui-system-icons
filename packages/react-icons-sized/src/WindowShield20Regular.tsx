import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h5.03a5.81 5.81 0 01-.7-1H5.5A1.5 1.5 0 014 14.5V7h12v1.23c.33.2.66.32 1 .38V5.5A2.5 2.5 0 0014.5 3h-9zm0 1h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z" fill={primaryFill} /><path d="M17 9.62a4.06 4.06 0 01-1-.27 5.16 5.16 0 01-1.72-1.23.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77A5.5 5.5 0 0011.01 16c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V10a.4.4 0 00-.4-.33c-.2 0-.4-.02-.6-.05z" fill={primaryFill} /></svg>;
}

const WindowShield20Regular = wrapIcon(rawSvg({}), 'WindowShield20Regular');
export default WindowShield20Regular;
      