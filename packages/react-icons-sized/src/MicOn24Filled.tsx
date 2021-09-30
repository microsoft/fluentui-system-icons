import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 11c.38 0 .7.28.74.65l.01.1v.5a6.75 6.75 0 01-6.25 6.73v2.27a.75.75 0 01-1.5.1v-2.37A6.75 6.75 0 015 12.48v-.73a.75.75 0 011.5-.1v.6a5.25 5.25 0 005.03 5.25h.72a5.25 5.25 0 005.25-5.03v-.72c0-.41.34-.75.75-.75zM12 2a4 4 0 014 4v6a4 4 0 01-8 0V6a4 4 0 014-4z" fill={primaryFill} /></svg>;
}

const MicOn24Filled = wrapIcon(rawSvg({}), 'MicOn24Filled');
export default MicOn24Filled;
      