import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.69 8l-2.26 2.26a.75.75 0 00.98 1.13l.08-.07 3.54-3.54.07-.08.04-.06.05-.1.03-.08.02-.07v-.06l.01-.1v-.06l-.02-.09-.03-.1-.05-.1-.03-.05a.75.75 0 00-.09-.11l.07.08a.74.74 0 00-.07-.08l-3.54-3.54a.75.75 0 00-1.13.98l.07.08L11.7 6.5H8c-3.65 0-6.13 2.08-6.25 5.04v.21a.75.75 0 001.5 0c0-2.13 1.7-3.66 4.5-3.75h3.94z" fill={primaryFill} /></svg>;
}

const ArrowForward16Filled = wrapIcon(rawSvg({}), 'ArrowForward16Filled');
export default ArrowForward16Filled;
      