import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.18 2.11a.5.5 0 01.42-.1l5 1c.23.05.4.25.4.49v9a.5.5 0 01-.4.49l-5 1a.5.5 0 01-.6-.5V2.5M10 8a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /><path d="M6 3H3.5a.5.5 0 00-.5.5v9c0 .27.22.5.5.5H6V3z" fill={primaryFill} /><path d="M7.18 2.11A.5.5 0 007 2.5l.18-.39z" fill={primaryFill} /></svg>;
}

const ConferenceRoom16Filled = wrapIcon(rawSvg({}), 'ConferenceRoom16Filled');
export default ConferenceRoom16Filled;
      