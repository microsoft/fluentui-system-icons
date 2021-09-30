import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2a2 2 0 00-2 2v4c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H3z" fill={primaryFill} /></svg>;
}

const RectangleLandscape12Filled = wrapIcon(rawSvg({}), 'RectangleLandscape12Filled');
export default RectangleLandscape12Filled;
      