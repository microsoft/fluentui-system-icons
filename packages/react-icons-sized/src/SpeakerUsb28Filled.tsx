import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 4.81c0-1.09-1.3-1.66-2.1-.9L9.45 8.52c-.33.3-.75.48-1.2.48H5.25A3.25 3.25 0 002 12.26v3.49C2 17.55 3.46 19 5.25 19h3.01c.45 0 .87.17 1.2.47l4.94 4.63c.8.74 2.1.18 2.1-.92V4.81z" fill={primaryFill} /><path d="M19 7.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v2.42c.6.28 1 .89 1 1.58v4.5c0 .97-.78 1.75-1.75 1.75h-.3v3.25a.75.75 0 01-1.5 0V18h-.95v3.25a.75.75 0 01-1.5 0V18h-.25c-.97 0-1.75-.78-1.75-1.75v-4.5c0-.7.4-1.3 1-1.58V7.75zm4.2 8.75h1.05c.14 0 .25-.1.25-.25v-4.5a.25.25 0 00-.25-.25h-4.5a.25.25 0 00-.25.25v4.5c0 .14.11.25.25.25H23.2zm-2.7-8V10h3V8.5h-3z" fill={primaryFill} /></svg>;
}

const SpeakerUsb28Filled = wrapIcon(rawSvg({}), 'SpeakerUsb28Filled');
export default SpeakerUsb28Filled;
      