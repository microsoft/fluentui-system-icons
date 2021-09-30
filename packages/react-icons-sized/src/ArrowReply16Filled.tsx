import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.31 8l2.26 2.26a.75.75 0 01-.98 1.13l-.08-.07-3.54-3.54-.07-.08-.04-.06-.05-.1-.03-.08-.02-.07v-.06l-.01-.1v-.06l.02-.09.03-.1.05-.1.03-.05a.75.75 0 01.09-.11l-.07.08a.75.75 0 01.07-.08L5.5 3.18a.75.75 0 011.13.98l-.07.09L4.3 6.5H8c3.65 0 6.13 2.08 6.25 5.04v.21a.75.75 0 01-1.5 0c0-2.13-1.7-3.66-4.5-3.75H4.32l2.26 2.26L4.3 8z" fill={primaryFill} /></svg>;
}

const ArrowReply16Filled = wrapIcon(rawSvg({}), 'ArrowReply16Filled');
export default ArrowReply16Filled;
      