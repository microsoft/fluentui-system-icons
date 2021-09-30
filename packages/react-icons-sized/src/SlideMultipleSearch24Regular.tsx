import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 20.5h-7.78l-1.5-1.5h9.28c.41 0 .75-.34.75-.75v-9.5a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v2.46A5.5 5.5 0 005.5 11V8.75c0-1.24 1-2.25 2.25-2.25h9.75V5.25a.75.75 0 00-.75-.75h-12c-.69 0-1.25.56-1.25 1.25v5.62a5.5 5.5 0 00-1.5.89V5.75A2.75 2.75 0 014.75 3h12C17.99 3 19 4 19 5.25V6.5h.75c1.24 0 2.25 1 2.25 2.25v9.5c0 1.24-1 2.25-2.25 2.25zm-11.64-.33a4.5 4.5 0 111.06-1.06l2.61 2.61a.75.75 0 11-1.06 1.06l-2.61-2.61zM2.5 16.5a3 3 0 106 0 3 3 0 00-6 0z" fill={primaryFill} /></svg>;
}

const SlideMultipleSearch24Regular = wrapIcon(rawSvg({}), 'SlideMultipleSearch24Regular');
export default SlideMultipleSearch24Regular;
      