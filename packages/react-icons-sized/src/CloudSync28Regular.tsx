import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.52 10a6.5 6.5 0 0112.96 0h.27c2.3 0 4.23 1.65 4.66 3.83a7.5 7.5 0 00-2.37-1.4 3.24 3.24 0 00-2.29-.93h-1a.75.75 0 01-.75-.75v-.25a5 5 0 00-10 0v.25c0 .41-.34.75-.75.75h-1a3.25 3.25 0 000 6.5h5.9c-.1.48-.15.99-.15 1.5H7.25a4.75 4.75 0 110-9.5h.27zM14 19.5a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm5.35-4.08a4 4 0 014.65 1.9v-.82a.5.5 0 011 0v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.73a3 3 0 00-4.85-.87.5.5 0 01-.7-.7 4 4 0 011.67-1.01zm2.3 8.16a4 4 0 01-4.65-1.9v.82a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-.73a3 3 0 004.85.87.5.5 0 01.7.7 4 4 0 01-1.67 1.01z" fill={primaryFill} /></svg>;
}

const CloudSync28Regular = wrapIcon(rawSvg({}), 'CloudSync28Regular');
export default CloudSync28Regular;
      