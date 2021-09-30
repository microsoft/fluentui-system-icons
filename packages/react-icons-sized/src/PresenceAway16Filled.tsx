import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm.5-11.5v3.02l2.12 1.7a1 1 0 11-1.24 1.56l-2.5-2A1 1 0 016.5 8V4.5a1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const PresenceAway16Filled = wrapIcon(rawSvg({}), 'PresenceAway16Filled');
export default PresenceAway16Filled;
      