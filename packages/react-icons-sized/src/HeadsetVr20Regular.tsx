import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 8.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M4 9.5c0-.28.22-.5.5-.5H6a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M14 9a.5.5 0 000 1h1.5a.5.5 0 000-1H14z" fill={primaryFill} /><path d="M10 6c-2.33 0-4.67.3-7 .89-.6.14-1 .68-1 1.28v2.55C2 12.52 3.44 14 5.24 14h2c.61 0 1.2-.27 1.6-.73l.52-.61a.83.83 0 011.28 0l.52.6c.4.47.99.74 1.6.74h2c1.8 0 3.24-1.48 3.24-3.28V8.17c0-.6-.4-1.14-1-1.28A28.51 28.51 0 0010 6zM3.24 7.86a27.51 27.51 0 0113.52 0c.14.03.24.16.24.31v2.55c0 1.27-1 2.28-2.24 2.28h-2c-.32 0-.63-.14-.84-.39l-.53-.6a1.83 1.83 0 00-2.78 0l-.53.6c-.21.25-.52.39-.84.39h-2A2.26 2.26 0 013 10.72V8.17c0-.15.1-.28.24-.31z" fill={primaryFill} /></svg>;
}

const HeadsetVr20Regular = wrapIcon(rawSvg({}), 'HeadsetVr20Regular');
export default HeadsetVr20Regular;
      