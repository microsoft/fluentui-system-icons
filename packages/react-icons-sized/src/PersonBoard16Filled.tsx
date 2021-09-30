import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v5A2.5 2.5 0 004.5 12h5A2.5 2.5 0 0012 9.5v-5A2.5 2.5 0 009.5 2h-5zM7 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1.75.63h3.5c.62 0 1.13.5 1.13 1.12v.25c0 .4-.18.89-.65 1.26-.46.38-1.18.62-2.23.62-1.06 0-1.78-.25-2.24-.62a1.63 1.63 0 01-.63-1.26v-.25c0-.62.5-1.13 1.12-1.13z" fill={primaryFill} /><path d="M4.5 13c.46.6 1.18 1 2 1h3A4.5 4.5 0 0014 9.5v-3c0-.82-.4-1.54-1-2v5A3.5 3.5 0 019.5 13h-5z" fill={primaryFill} /></svg>;
}

const PersonBoard16Filled = wrapIcon(rawSvg({}), 'PersonBoard16Filled');
export default PersonBoard16Filled;
      