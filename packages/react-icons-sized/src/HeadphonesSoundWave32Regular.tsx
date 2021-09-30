import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 15.5a11.5 11.5 0 0123 0V18h-4a1 1 0 00-1 1v10a1 1 0 001 1h1.5a4.5 4.5 0 004.5-4.5v-10a13.5 13.5 0 00-27 0v10A4.5 4.5 0 006.5 30H8a1 1 0 001-1V19a1 1 0 00-1-1H4v-2.5zM24 20h3v5.5a2.5 2.5 0 01-2.5 2.5H24v-8zM4 20h3v8h-.5A2.5 2.5 0 014 25.5V20zm12.5-3a1 1 0 10-2 0v13a1 1 0 102 0V17zM12 20a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm8 1a1 1 0 10-2 0v5a1 1 0 102 0v-5z" fill={primaryFill} /></svg>;
}

const HeadphonesSoundWave32Regular = wrapIcon(rawSvg({}), 'HeadphonesSoundWave32Regular');
export default HeadphonesSoundWave32Regular;
      