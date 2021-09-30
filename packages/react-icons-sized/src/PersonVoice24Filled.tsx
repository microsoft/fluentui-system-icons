import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.75 15C16 15 17 16 17 17.25v.92c0 .57-.18 1.13-.51 1.6C14.94 21.93 12.42 23 9 23s-5.94-1.07-7.49-3.24a2.75 2.75 0 01-.5-1.6v-.91C1 16 2 15 3.24 15h11.5zm4.3-13.6a.75.75 0 011.03.28 12.7 12.7 0 01-.01 12.66.75.75 0 11-1.3-.75 11.2 11.2 0 000-11.16.75.75 0 01.28-1.03zM9 3a5 5 0 110 10A5 5 0 019 3zm6.59.4a.75.75 0 011.02.28 8.71 8.71 0 010 8.65.75.75 0 11-1.3-.74 7.21 7.21 0 000-7.17.75.75 0 01.28-1.02z" fill={primaryFill} /></svg>;
}

const PersonVoice24Filled = wrapIcon(rawSvg({}), 'PersonVoice24Filled');
export default PersonVoice24Filled;
      