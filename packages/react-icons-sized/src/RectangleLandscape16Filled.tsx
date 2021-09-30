import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3A2.5 2.5 0 001 5.5v5A2.5 2.5 0 003.5 13h9a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0012.5 3h-9z" fill={primaryFill} /></svg>;
}

const RectangleLandscape16Filled = wrapIcon(rawSvg({}), 'RectangleLandscape16Filled');
export default RectangleLandscape16Filled;
      