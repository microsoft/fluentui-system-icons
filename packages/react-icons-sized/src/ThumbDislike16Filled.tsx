import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.1 4.62a3.5 3.5 0 00-4.38-2.73L3.77 3.27a2 2 0 00-1.43 1.56l-.23 1.2c-.16.87.46 1.64 1.16 1.93.25.1.55.25.85.46a8.22 8.22 0 013.02 3.92l.28.7c.14.38.28.73.41 1 .11.23.25.46.42.63.19.19.44.33.75.33.36 0 .67-.12.91-.34.24-.2.4-.48.5-.76.22-.55.28-1.25.3-1.9a14.75 14.75 0 00-.13-2h.51a2.5 2.5 0 002.46-2.96l-.46-2.42z" fill={primaryFill} /></svg>;
}

const ThumbDislike16Filled = wrapIcon(rawSvg({}), 'ThumbDislike16Filled');
export default ThumbDislike16Filled;
      