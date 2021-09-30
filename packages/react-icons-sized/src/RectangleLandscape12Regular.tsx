import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 4c0-1.1.9-2 2-2h6a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H3z" fill={primaryFill} /></svg>;
}

const RectangleLandscape12Regular = wrapIcon(rawSvg({}), 'RectangleLandscape12Regular');
export default RectangleLandscape12Regular;
      