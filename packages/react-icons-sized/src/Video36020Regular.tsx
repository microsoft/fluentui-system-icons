import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 9a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M7 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M15 10a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M3.97 4.02A1.7 1.7 0 002 5.7v8.6a1.7 1.7 0 001.97 1.68c4-.64 8.07-.64 12.06 0A1.7 1.7 0 0018 14.3V5.7a1.7 1.7 0 00-1.97-1.68c-4 .65-8.07.65-12.06 0zM3 5.7a.7.7 0 01.81-.7c4.1.67 8.28.67 12.38 0a.7.7 0 01.81.7v8.6a.7.7 0 01-.81.7 41.6 41.6 0 00-.19-.04V13a1 1 0 00-1-1h-2v2.61l-1-.06V12a1 1 0 00-1-1H9a1 1 0 00-1 1v2.55l-1 .06V12H5a1 1 0 00-1 1v1.96l-.19.03A.7.7 0 013 14.3V5.7z" fill={primaryFill} /></svg>;
}

const Video36020Regular = wrapIcon(rawSvg({}), 'Video36020Regular');
export default Video36020Regular;
      