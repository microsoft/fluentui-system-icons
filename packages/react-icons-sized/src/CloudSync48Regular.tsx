import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.04 16a11 11 0 0121.92 0h.29a7.75 7.75 0 017.7 8.63 13.08 13.08 0 00-2.68-2.4 5.25 5.25 0 00-5.02-3.73h-1.5c-.69 0-1.25-.56-1.25-1.25V17a8.5 8.5 0 00-17 0v.25c0 .69-.56 1.25-1.25 1.25h-1.5a5.25 5.25 0 100 10.5h7.88c-.26.8-.45 1.64-.54 2.5h-7.34a7.75 7.75 0 010-15.5h.3zM22 33a11 11 0 1022 0 11 11 0 00-22 0zm8.65-7.1A7 7 0 0138 27.6V27a1 1 0 112 0v3a1 1 0 01-1 1h-3a1 1 0 110-2h.57a5 5 0 00-7.1-.04 1 1 0 01-1.42-1.41 7 7 0 012.6-1.64zm4.7 14.2A7 7 0 0128 38.4v.6a1 1 0 11-2 0v-3a1 1 0 011-1h3a1 1 0 110 2h-.57a5 5 0 007.1.04 1 1 0 011.42 1.41 7 7 0 01-2.6 1.64z" fill={primaryFill} /></svg>;
}

const CloudSync48Regular = wrapIcon(rawSvg({}), 'CloudSync48Regular');
export default CloudSync48Regular;
      