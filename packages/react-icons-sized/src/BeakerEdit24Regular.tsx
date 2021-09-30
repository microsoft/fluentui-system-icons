import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3.5h1v6.24c0 .37-.1.74-.27 1.07l-3.59 6.6A1.75 1.75 0 004.68 20h6.74l.1-.42c.1-.39.25-.75.46-1.08h-7.3a.25.25 0 01-.22-.37l1.97-3.63h7.14l.8 1.48 1.1-1.1-2.2-4.07c-.18-.33-.27-.7-.27-1.07V3.5h1A.75.75 0 0014 2H6a.75.75 0 000 1.5zm2.5 6.24V3.5h3v6.24c0 .62.16 1.24.45 1.79l.8 1.47h-5.5l.8-1.47c.3-.55.45-1.17.45-1.8zm10.6 2.93l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const BeakerEdit24Regular = wrapIcon(rawSvg({}), 'BeakerEdit24Regular');
export default BeakerEdit24Regular;
      