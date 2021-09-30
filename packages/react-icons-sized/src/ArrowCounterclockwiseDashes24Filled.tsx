import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2.75c.66 0 1.3.07 1.92.2a1 1 0 11-.41 1.96 7.28 7.28 0 00-3.02 0 1 1 0 11-.41-1.96c.62-.13 1.26-.2 1.92-.2zm-5.75 2v-.5a1 1 0 00-2 0v3a1 1 0 001 1h3a1 1 0 100-2h-.67c.15-.12.31-.23.47-.33a1 1 0 00-1.09-1.68c-.24.16-.48.33-.71.51zm9.4-.22a1 1 0 011.39-.29 9.3 9.3 0 012.72 2.72 1 1 0 11-1.68 1.1 7.3 7.3 0 00-2.13-2.14 1 1 0 01-.3-1.39zm4.21 4.78a1 1 0 011.19.77 9.28 9.28 0 010 3.84 1 1 0 11-1.96-.41 7.29 7.29 0 000-3.02 1 1 0 01.77-1.18zm-16.11.94a1 1 0 011 1V12c0 .52.05 1.02.16 1.5a1 1 0 11-1.96.42 9.28 9.28 0 01-.2-1.92v-.75a1 1 0 011-1zm.78 5.4a1 1 0 011.39.3 7.3 7.3 0 002.13 2.13 1 1 0 01-1.09 1.68 9.3 9.3 0 01-2.72-2.72 1 1 0 01.3-1.38zm13.55.3a1 1 0 011.68 1.09 9.3 9.3 0 01-2.72 2.72 1 1 0 11-1.1-1.68 7.3 7.3 0 002.14-2.13zm-4.57 3.14a1 1 0 11.41 1.96 9.28 9.28 0 01-3.84 0 1 1 0 11.41-1.96 7.29 7.29 0 003.02 0z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwiseDashes24Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwiseDashes24Filled');
export default ArrowCounterclockwiseDashes24Filled;
      