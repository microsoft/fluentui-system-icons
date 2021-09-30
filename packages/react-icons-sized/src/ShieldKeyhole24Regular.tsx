import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 11a2 2 0 01-1.25 1.85v2.4a.75.75 0 01-1.5 0v-2.4A2 2 0 1114 11z" fill={primaryFill} /><path d="M3.75 5a.75.75 0 00-.75.75V11c0 5 2.96 8.68 8.73 10.95.17.07.37.07.54 0C18.04 19.68 21 16 21 11V5.75a.75.75 0 00-.75-.75c-2.66 0-5.26-.94-7.8-2.85a.75.75 0 00-.9 0C9.01 4.05 6.41 5 3.75 5zm.75 6V6.48a14.36 14.36 0 007.5-2.8 14.36 14.36 0 007.5 2.8V11c0 4.26-2.45 7.38-7.5 9.44-5.05-2.06-7.5-5.18-7.5-9.44z" fill={primaryFill} /></svg>;
}

const ShieldKeyhole24Regular = wrapIcon(rawSvg({}), 'ShieldKeyhole24Regular');
export default ShieldKeyhole24Regular;
      