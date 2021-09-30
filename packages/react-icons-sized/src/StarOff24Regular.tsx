import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.8 4.8-3.86.57a1.35 1.35 0 00-.75 2.3l3.81 3.72-.9 5.25a1.35 1.35 0 001.96 1.42L12 18.86l4.71 2.48c1 .52 2.15-.32 1.96-1.42l-.04-.22 2.09 2.08a.75.75 0 001.06-1.06L3.28 2.22zM16.8 17.86l.34 2.01-4.51-2.37c-.4-.2-.87-.2-1.26 0l-4.52 2.37.87-5.03c.07-.43-.07-.88-.4-1.2L3.68 10.1l4.68-.68 8.45 8.45z" fill={primaryFill} /><path d="M20.32 10.09l-3.57 3.48 1.06 1.06 3.78-3.68c.8-.78.36-2.14-.75-2.3l-5.27-.77L13.2 3.1c-.5-1-1.93-1-2.42 0L9.3 6.12l1.12 1.12L12 4.04l2.26 4.57c.2.4.57.68 1.01.74l5.05.74z" fill={primaryFill} /></svg>;
}

const StarOff24Regular = wrapIcon(rawSvg({}), 'StarOff24Regular');
export default StarOff24Regular;
      