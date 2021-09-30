import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.7 2.3a1 1 0 00-1.4 1.4l5.3 5.32A5 5 0 003 14v9a5 5 0 005 5h16c.76 0 1.47-.17 2.12-.47l2.17 2.18a1 1 0 001.42-1.42l-26-26zm20.84 23.65c-.18.03-.36.05-.54.05H8a3 3 0 01-3-3v-9a3 3 0 013-3h1.59l14.95 14.95zM29 23c0 .72-.15 1.41-.43 2.03l-1.6-1.6c.02-.14.03-.28.03-.43v-9a3 3 0 00-3-3h-9.46l-2-2H20V5h-8v3.46l-2-2V4a1 1 0 011-1h10a1 1 0 011 1v5h2a5 5 0 015 5v9z" fill={primaryFill} /></svg>;
}

const BriefcaseOff32Regular = wrapIcon(rawSvg({}), 'BriefcaseOff32Regular');
export default BriefcaseOff32Regular;
      