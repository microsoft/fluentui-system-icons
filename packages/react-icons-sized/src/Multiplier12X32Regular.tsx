import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.39 12.7v-.04l.07-.2c.06-.17.17-.4.34-.63.31-.42.89-.9 2.07-.9 1.07 0 1.72.35 2.09.81.37.48.58 1.24.39 2.36-.1.62-.42.99-.92 1.31-.42.27-.88.46-1.45.7l-.76.3a6.7 6.7 0 00-2.6 1.78 5.8 5.8 0 00-1.22 3.88 1 1 0 001 1h6.93a1 1 0 000-2h-5.85a3.2 3.2 0 01.68-1.6A4.77 4.77 0 0117 18.25l.56-.23c.63-.25 1.35-.55 1.94-.92a3.8 3.8 0 001.8-2.66 4.89 4.89 0 00-.78-3.93 4.48 4.48 0 00-3.66-1.58 4.37 4.37 0 00-4.44 3.37l-.01.04v.02s-.1.52 0 0a1 1 0 001.96.35zm10.32 3.6a1 1 0 10-1.42 1.4l1.8 1.8-1.8 1.8a1 1 0 001.42 1.4l1.79-1.79 1.8 1.8a1 1 0 001.4-1.42l-1.79-1.79 1.8-1.8a1 1 0 00-1.42-1.4l-1.79 1.79-1.8-1.8zM11 22a1 1 0 11-2 0 1 1 0 012 0zM7.33 9.05A1 1 0 018 10v12a1 1 0 11-2 0v-9.58c-.55.47-1.22.98-1.99 1.44A1 1 0 013 12.14 13.27 13.27 0 006.2 9.4a1 1 0 011.12-.34z" fill={primaryFill} /></svg>;
}

const Multiplier12X32Regular = wrapIcon(rawSvg({}), 'Multiplier12X32Regular');
export default Multiplier12X32Regular;
      