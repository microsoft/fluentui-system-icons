import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22l18.5 18.5a.75.75 0 01-1.06 1.06l-1.26-1.26c-.5.3-1.08.48-1.71.48H6.25A3.25 3.25 0 013 17.75V6.25c0-.63.18-1.21.48-1.7L2.22 3.27a.75.75 0 111.06-1.06zM18.34 19.4L4.6 5.66c-.06.19-.1.38-.1.59v11.5c0 .97.78 1.75 1.75 1.75h11.5c.2 0 .4-.04.59-.1zm-5.26-9.5l1.02 1.02a.75.75 0 00.18-.14l5.22-5.22v4.69a.75.75 0 001.5 0v-6.5a.75.75 0 00-.75-.75h-6.5a.75.75 0 000 1.5h4.69l-5.22 5.22a.75.75 0 00-.14.18zM21 17.82l-1.5-1.5v-2.57a.75.75 0 011.5 0v4.07zM6.18 3l1.5 1.5h2.57a.75.75 0 000-1.5H6.18z" fill={primaryFill} /></svg>;
}

const OpenOff24Regular = wrapIcon(rawSvg({}), 'OpenOff24Regular');
export default OpenOff24Regular;
      