import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 4.81c0-1.09-1.3-1.66-2.1-.9L9.45 8.52c-.33.3-.75.48-1.2.48H5.25A3.25 3.25 0 002 12.26v3.49C2 17.55 3.46 19 5.25 19h3.01c.45 0 .87.17 1.2.47l4.94 4.63c.8.74 2.1.18 2.1-.92V4.81z" fill={primaryFill} /><path d="M19.78 10.72a.75.75 0 00-1.06 1.06L20.94 14l-2.22 2.2a.75.75 0 001.06 1.07l2.22-2.2 2.22 2.2a.75.75 0 101.06-1.06l-2.22-2.2 2.22-2.24a.75.75 0 00-1.06-1.06L22 12.95l-2.22-2.23z" fill={primaryFill} /></svg>;
}

const SpeakerMute28Filled = wrapIcon(rawSvg({}), 'SpeakerMute28Filled');
export default SpeakerMute28Filled;
      