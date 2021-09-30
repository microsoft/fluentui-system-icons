import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.15 2.02a.5.5 0 00-.65.48v9.9A3.24 3.24 0 004 14.75a3.25 3.25 0 106.5-.25V7.18l5.85 1.8A.5.5 0 0017 8.5V5.98a2.5 2.5 0 00-1.76-2.4l-5.1-1.56z" fill={primaryFill} /></svg>;
}

const MusicNote120Filled = wrapIcon(rawSvg({}), 'MusicNote120Filled');
export default MusicNote120Filled;
      