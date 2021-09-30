import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.28 10.22a.75.75 0 00-1.06 1.06L12.94 14l-2.72 2.72a.75.75 0 001.06 1.06L14 15.06l2.72 2.72a.75.75 0 001.06-1.06L15.06 14l2.72-2.72a.75.75 0 00-1.06-1.06L14 12.94l-2.72-2.72z" fill={primaryFill} /><path d="M4.25 5C3.01 5 2 6 2 7.25v13.5C2 21.99 3 23 4.25 23h19.5c1.24 0 2.25-1 2.25-2.25V7.25C26 6.01 25 5 23.75 5H4.25zM3.5 7.25c0-.41.34-.75.75-.75h19.5c.41 0 .75.34.75.75v13.5c0 .41-.34.75-.75.75H4.25a.75.75 0 01-.75-.75V7.25z" fill={primaryFill} /></svg>;
}

const ShareScreenStop28Regular = wrapIcon(rawSvg({}), 'ShareScreenStop28Regular');
export default ShareScreenStop28Regular;
      