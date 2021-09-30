import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zm-5.48 0a6.47 6.47 0 00-.52 6c-2.56-.14-4-1.23-4-3.25v-1c0-.97.78-1.75 1.75-1.75h2.77zm-3.9-5a4 4 0 001.07 3.85l.17.15h-.11a2.75 2.75 0 00-2.65 2h-.03C3.66 15 2 13.93 2 11.76v-1c0-.92.7-1.67 1.6-1.74L3.76 9h4.38zM12 7a3 3 0 110 6 3 3 0 010-6zm8.25 2c.97 0 1.75.78 1.75 1.75v.96c.02.37-.01.7-.09 1.02a6.48 6.48 0 00-6.1-1.5A3.94 3.94 0 0015.87 9h4.38zM6.5 2a3 3 0 110 6 3 3 0 010-6zm11 0a3 3 0 110 6 3 3 0 010-6z" fill={primaryFill} /></svg>;
}

const PeopleCommunityAdd24Filled = wrapIcon(rawSvg({}), 'PeopleCommunityAdd24Filled');
export default PeopleCommunityAdd24Filled;
      