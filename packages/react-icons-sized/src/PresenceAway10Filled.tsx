import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 10A5 5 0 105 0a5 5 0 000 10zm0-7v1.8l1.35 1.35a.5.5 0 11-.7.7l-1.5-1.5A.5.5 0 014 5V3a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const PresenceAway10Filled = wrapIcon(rawSvg({}), 'PresenceAway10Filled');
export default PresenceAway10Filled;
      