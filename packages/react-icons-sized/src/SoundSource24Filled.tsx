import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 12a8.5 8.5 0 1114.76 5.75l1 1.13a10 10 0 10-14.5 0l.98-1.13A8.47 8.47 0 013.5 12z" fill={primaryFill} /><path d="M19.25 12.13a7.1 7.1 0 01-1.78 4.71l-1-1.14a5.63 5.63 0 10-8.8-.15L6.65 16.7a7.12 7.12 0 1112.6-4.57z" fill={primaryFill} /><path d="M16.25 12c0 .94-.3 1.8-.82 2.51l-1.03-1.17a2.75 2.75 0 10-4.8 0L8.57 14.5A4.25 4.25 0 1116.25 12z" fill={primaryFill} /><path d="M12 12.5c.22 0 .42.1.56.26l7 8A.75.75 0 0119 22H5a.75.75 0 01-.56-1.24l7-8a.75.75 0 01.56-.26z" fill={primaryFill} /></svg>;
}

const SoundSource24Filled = wrapIcon(rawSvg({}), 'SoundSource24Filled');
export default SoundSource24Filled;
      