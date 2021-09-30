import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.4 3.9c.8-.75 2.1-.18 2.1.91v18.37c0 1.1-1.3 1.66-2.1.92l-4.94-4.63c-.33-.3-.75-.47-1.2-.47H5.25A3.25 3.25 0 012 15.75v-3.5c0-1.79 1.46-3.24 3.25-3.24h3.01c.45 0 .87-.17 1.2-.48l4.93-4.63zm.6 1.5l-4.52 4.23c-.6.56-1.4.88-2.22.88H5.25c-.97 0-1.75.78-1.75 1.75v3.49c0 .96.78 1.75 1.75 1.75h3.01c.83 0 1.62.31 2.22.88L15 22.6V5.39z" fill={primaryFill} /><path d="M19 7.75c0-.41.34-.75.75-.75h4.5c.41 0 .75.34.75.75v2.42c.6.28 1 .89 1 1.58v4.5c0 .97-.78 1.75-1.75 1.75h-.3v3.25a.75.75 0 01-1.5 0V18h-.95v3.25a.75.75 0 01-1.5 0V18h-.25c-.97 0-1.75-.78-1.75-1.75v-4.5c0-.7.4-1.3 1-1.58V7.75zm4.2 8.75h1.05c.14 0 .25-.1.25-.25v-4.5a.25.25 0 00-.25-.25h-4.5a.25.25 0 00-.25.25v4.5c0 .14.11.25.25.25H23.2zm-2.7-8V10h3V8.5h-3z" fill={primaryFill} /></svg>;
}

const SpeakerUsb28Regular = wrapIcon(rawSvg({}), 'SpeakerUsb28Regular');
export default SpeakerUsb28Regular;
      