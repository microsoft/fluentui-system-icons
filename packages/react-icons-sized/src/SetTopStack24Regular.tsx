import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 5.85c.28 0 .54.16.67.41L11 7.91l1.6.2a.75.75 0 01.39 1.32l-1.15.95.4 1.8a.75.75 0 01-1.13.8l-1.6-1-1.6 1a.75.75 0 01-1.13-.8l.4-1.8-1.15-.95a.75.75 0 01.39-1.32L8 7.9l.82-1.65a.75.75 0 01.67-.41zm0 2.43l-.33.66a.75.75 0 01-.58.4l-.28.04.17.14c.22.18.31.47.25.74l-.11.5.48-.3a.75.75 0 01.8 0l.48.3-.11-.5a.75.75 0 01.25-.74l.17-.14-.28-.04a.75.75 0 01-.58-.4l-.33-.66z" fill={primaryFill} /><path d="M4 4h11a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm11 1.5H4a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h11a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5z" fill={primaryFill} /><path d="M4.56 16a2 2 0 001.94 1.5h9a4 4 0 004-4v-5A2 2 0 0018 6.56v6.94a2.5 2.5 0 01-2.5 2.5H4.56z" fill={primaryFill} /><path d="M7.06 18.5A2 2 0 009 20h7.25A5.75 5.75 0 0022 14.25V11a2 2 0 00-1.5-1.94v5.19c0 2.35-1.9 4.25-4.25 4.25H7.06z" fill={primaryFill} /></svg>;
}

const SetTopStack24Regular = wrapIcon(rawSvg({}), 'SetTopStack24Regular');
export default SetTopStack24Regular;
      