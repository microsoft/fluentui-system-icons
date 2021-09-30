import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14.5c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25H5.25C4.01 22 3 21 3 19.75v-3c0-1.24 1-2.25 2.25-2.25h12.5zm0 1.5H5.25a.75.75 0 00-.75.75v3c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-3a.75.75 0 00-.75-.75zm-10.7-4.03l3.76-9.5a.75.75 0 011.34-.1l.05.1 3.75 9.5a.75.75 0 01-1.35.65l-.05-.1-1-2.52h-4.1l-1 2.52a.75.75 0 01-.88.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1 3.76-9.5-3.76 9.5zm4.45-7.18L10.04 8.5h2.92L11.5 4.8z" fill={primaryFill} /></svg>;
}

const TextColor24Regular = wrapIcon(rawSvg({}), 'TextColor24Regular');
export default TextColor24Regular;
      