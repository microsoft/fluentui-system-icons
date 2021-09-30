import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 16.5H5.25A3.25 3.25 0 012 13.25v-8C2 3.45 3.46 2 5.25 2h8c1.8 0 3.25 1.46 3.25 3.25V6.5h-1.65l.15-.15v-1.1c0-.23-.04-.45-.13-.65l-1.9 1.9h-2.12l2.92-2.92a1.75 1.75 0 00-.52-.08h-1.28L3.5 11.97v1.28c0 .18.03.36.08.52l2.92-2.92v2.12l-1.9 1.9c.2.09.42.13.65.13h1.1l.15-.15v1.65zm3.35-13H7.97L3.5 7.97v1.88L9.85 3.5zm-4 0h-.6c-.97 0-1.75.78-1.75 1.75v.6L5.85 3.5z" fill={primaryFill} /><path d="M22 18.75c0 1.8-1.46 3.25-3.25 3.25h-8a3.25 3.25 0 01-3.25-3.25v-8c0-1.8 1.46-3.25 3.25-3.25h8c1.8 0 3.25 1.46 3.25 3.25v8zm-3.25 1.75c.97 0 1.75-.78 1.75-1.75v-8c0-.97-.78-1.75-1.75-1.75h-8C9.78 9 9 9.78 9 10.75v8c0 .97.78 1.75 1.75 1.75h8z" fill={primaryFill} /></svg>;
}

const PositionBackward24Regular = wrapIcon(rawSvg({}), 'PositionBackward24Regular');
export default PositionBackward24Regular;
      