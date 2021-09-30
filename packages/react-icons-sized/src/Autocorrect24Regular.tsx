import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.46 4.93c.3.19.55.42.75.7l.12.17 2.94 4.7h4.23c.38 0 .7.28.74.65l.01.1c0 .41-.34.75-.75.75h-3.28a4.75 4.75 0 11-3.46-1.5h.75l-2.45-3.9a1.25 1.25 0 00-2.04-.11l-.08.11L3.4 18.65a.75.75 0 01-1.33-.7l.05-.1L9.67 5.8a2.75 2.75 0 013.8-.87zM14.75 12a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" fill={primaryFill} /></svg>;
}

const Autocorrect24Regular = wrapIcon(rawSvg({}), 'Autocorrect24Regular');
export default Autocorrect24Regular;
      