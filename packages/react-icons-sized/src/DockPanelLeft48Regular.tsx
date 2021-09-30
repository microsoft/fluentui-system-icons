import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M39.25 8A4.75 4.75 0 0144 12.75v22.5A4.75 4.75 0 0139.25 40H8.75A4.75 4.75 0 014 35.25v-22.5A4.75 4.75 0 018.75 8h30.5zm2.25 4.75c0-1.24-1-2.25-2.25-2.25H19v27h20.25c1.24 0 2.25-1 2.25-2.25v-22.5zm-25 24.75v-27H8.75c-1.24 0-2.25 1-2.25 2.25v22.5c0 1.24 1 2.25 2.25 2.25h7.75z" fill={primaryFill} /></svg>;
}

const DockPanelLeft48Regular = wrapIcon(rawSvg({}), 'DockPanelLeft48Regular');
export default DockPanelLeft48Regular;
      