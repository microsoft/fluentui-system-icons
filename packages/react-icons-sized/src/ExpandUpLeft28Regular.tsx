import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.5 6.75c0-1.24-1-2.25-2.25-2.25h-5a.75.75 0 010-1.5h5A3.75 3.75 0 0125 6.75v14.5A3.75 3.75 0 0121.25 25H6.75A3.75 3.75 0 013 21.25v-5a.75.75 0 011.5 0v5c0 1.24 1 2.25 2.25 2.25H14v-6.75A2.75 2.75 0 0116.75 14h6.75V6.75zm0 8.75h-6.75c-.69 0-1.25.56-1.25 1.25v6.75h5.75c1.24 0 2.25-1 2.25-2.25V15.5zm-11-11.75a.75.75 0 00-.75-.75h-8a.75.75 0 00-.75.75v8a.75.75 0 001.5 0V5.56l6.22 6.22a.75.75 0 101.06-1.06L5.56 4.5h6.19c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft28Regular = wrapIcon(rawSvg({}), 'ExpandUpLeft28Regular');
export default ExpandUpLeft28Regular;
      