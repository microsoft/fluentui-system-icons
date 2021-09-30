import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.09 7.75a5.75 5.75 0 0111.32 0h.09a4 4 0 013.96 4.55 6.49 6.49 0 00-11.42 3.45H6a4 4 0 010-8h.09zM16.5 22a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm2.65-7.85a.5.5 0 01.7.7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 3.65-3.64z" fill={primaryFill} /></svg>;
}

const CloudSyncComplete24Filled = wrapIcon(rawSvg({}), 'CloudSyncComplete24Filled');
export default CloudSyncComplete24Filled;
      