import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.51 2.05a.75.75 0 00-1.01.7v12.13a4 4 0 101.5 3.37V8.83l6.99 2.62a.75.75 0 001.01-.7V7.48c0-1.35-.84-2.56-2.1-3.04l-6.39-2.4z" fill={primaryFill} /></svg>;
}

const MusicNote124Filled = wrapIcon(rawSvg({}), 'MusicNote124Filled');
export default MusicNote124Filled;
      