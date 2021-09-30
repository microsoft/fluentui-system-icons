import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 2a7.5 7.5 0 017.18 5.32 7.5 7.5 0 11-9.36 9.36A7.5 7.5 0 019.5 2zm7.49 7.04v.22l.01.24a7.5 7.5 0 01-7.96 7.49 6 6 0 107.95-7.95zM9.5 3.5a6 6 0 00-2.49 11.46v-.22L7 14.5a7.5 7.5 0 017.96-7.49A6 6 0 009.5 3.5z" fill={primaryFill} /></svg>;
}

const PhotoFilter24Regular = wrapIcon(rawSvg({}), 'PhotoFilter24Regular');
export default PhotoFilter24Regular;
      