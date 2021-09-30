import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 6.5a4.5 4.5 0 119 0v7.12c-.54.24-1.04.53-1.5.88v-8a3 3 0 10-6 0v8a3 3 0 003.66 2.93c-.23.5-.4 1.02-.51 1.57H13a4.5 4.5 0 01-4.5-4.5v-8zM13.02 21H13a6.5 6.5 0 01-6.5-6.5v-.75a.75.75 0 10-1.5 0v.75a8 8 0 007.25 7.97v2.78a.75.75 0 001.5 0v-1.48a7.46 7.46 0 01-.73-2.77zm7.48 6a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0-1.5a4.98 4.98 0 01-2.97-.97l7-7a5 5 0 01-4.03 7.97zm2.97-9.03l-7 7a5 5 0 017-7z" fill={primaryFill} /></svg>;
}

const MicProhibited28Regular = wrapIcon(rawSvg({}), 'MicProhibited28Regular');
export default MicProhibited28Regular;
      