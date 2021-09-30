import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.5 4.5-3.11.93A2.25 2.25 0 002 10.87v2.26c0 1 .65 1.87 1.6 2.16l2.4.7v.7a4 4 0 007.6 1.57l5.12 1.52 2 2a.75.75 0 001.06-1.06L3.28 2.22zM7.5 16.44l4.62 1.38A2.5 2.5 0 017.5 16.5v-.06z" fill={primaryFill} /><path d="M22 17.74c0 .32-.07.62-.18.9L10 6.8l9.1-2.7A2.25 2.25 0 0122 6.26v11.48z" fill={primaryFill} /></svg>;
}

const MegaphoneOff24Filled = wrapIcon(rawSvg({}), 'MegaphoneOff24Filled');
export default MegaphoneOff24Filled;
      