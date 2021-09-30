import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.51 2.05a.75.75 0 00-1.01.7v12.13a4 4 0 101.5 3.37V8.83l6.99 2.62a.75.75 0 001.01-.7V7.48c0-1.35-.84-2.56-2.1-3.04l-6.39-2.4zM10.5 18a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm8-8.33L12 7.23v-3.4l5.36 2.01c.69.26 1.14.91 1.14 1.64v2.19z" fill={primaryFill} /></svg>;
}

const MusicNote124Regular = wrapIcon(rawSvg({}), 'MusicNote124Regular');
export default MusicNote124Regular;
      