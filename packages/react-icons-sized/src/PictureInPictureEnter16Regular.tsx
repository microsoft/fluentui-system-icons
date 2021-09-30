import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H7v-1H3.5A1.5 1.5 0 012 9.5v-5C2 3.67 2.67 3 3.5 3h8c.83 0 1.5.67 1.5 1.5V8h1V4.5A2.5 2.5 0 0011.5 2h-8zm.85 2.65a.5.5 0 10-.7.7L5.29 7H4.5a.5.5 0 000 1h2a.5.5 0 00.35-.14A.5.5 0 007 7.5v-2a.5.5 0 00-1 0v.8L4.35 4.64zM9 9a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1H9z" fill={primaryFill} /></svg>;
}

const PictureInPictureEnter16Regular = wrapIcon(rawSvg({}), 'PictureInPictureEnter16Regular');
export default PictureInPictureEnter16Regular;
      