import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a4.5 4.5 0 00-4.5 4.5v8a4.5 4.5 0 109 0v-8A4.5 4.5 0 0014 2zm-3 4.5a3 3 0 116 0v8a3 3 0 11-6 0v-8z" fill={primaryFill} /><path d="M7.5 13.75a.75.75 0 10-1.5 0v.75a8 8 0 007.25 7.97v2.78a.75.75 0 001.5 0v-2.78A8 8 0 0022 14.5v-.75a.75.75 0 10-1.5 0v.75a6.5 6.5 0 11-13 0v-.75z" fill={primaryFill} /></svg>;
}

const MicOn28Regular = wrapIcon(rawSvg({}), 'MicOn28Regular');
export default MicOn28Regular;
      