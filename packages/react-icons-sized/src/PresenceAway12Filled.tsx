import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12A6 6 0 106 0a6 6 0 000 12zm.5-8.75v2.4l1.49 1.28A.75.75 0 117 8.07l-1.75-1.5A.75.75 0 015 6V3.25a.75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const PresenceAway12Filled = wrapIcon(rawSvg({}), 'PresenceAway12Filled');
export default PresenceAway12Filled;
      