import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l5.72 5.73H5.25A3.25 3.25 0 002 12.26v3.49C2 17.55 3.46 19 5.25 19h3.01c.45 0 .87.17 1.2.47l4.94 4.63c.8.74 2.1.18 2.1-.92v-5.62l8.22 8.22a.75.75 0 001.06-1.06L3.28 2.22zM15 16.06v6.55l-4.52-4.23c-.6-.57-1.4-.88-2.22-.88H5.25c-.97 0-1.75-.79-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74h3.01c.35 0 .7-.06 1.02-.17L15 16.06z" fill={primaryFill} /><path d="M10.62 7.44l1.06 1.06L15 5.4v6.42l1.5 1.5v-8.5c0-1.1-1.3-1.67-2.1-.92l-3.78 3.54z" fill={primaryFill} /><path d="M20.17 17l1.14 1.13a9.46 9.46 0 00-.96-9.83.75.75 0 10-1.2.9 7.96 7.96 0 011.02 7.8z" fill={primaryFill} /><path d="M22.98 19.8l1.09 1.09A13.2 13.2 0 0022.7 5.25a.75.75 0 00-1.12 1 11.7 11.7 0 011.4 13.54z" fill={primaryFill} /></svg>;
}

const SpeakerOff28Regular = wrapIcon(rawSvg({}), 'SpeakerOff28Regular');
export default SpeakerOff28Regular;
      