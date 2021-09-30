import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.7 2.15c.19.14.3.36.3.6V16.5a3.5 3.5 0 11-1.5-2.87V7.76L10 10.3v8.19a3.5 3.5 0 11-1.5-2.87V5.75c0-.33.22-.62.53-.72l10-3a.75.75 0 01.67.12zM10 8.75l8.5-2.56V3.76L10 6.3v2.43zM6.5 16.5a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 104 0 2 2 0 00-4 0z" fill={primaryFill} /></svg>;
}

const MusicNote224Regular = wrapIcon(rawSvg({}), 'MusicNote224Regular');
export default MusicNote224Regular;
      