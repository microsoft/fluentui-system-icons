import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.93 5.66c-1.96-1.73-5.02-2.6-9.18-2.59-4.16 0-7.13.88-8.9 2.6a2.82 2.82 0 00-.73 2.86l.31 1.03a2.17 2.17 0 002.28 1.51l2.03-.2a1.9 1.9 0 001.71-1.55l.4-2.2a8.1 8.1 0 016.22-.18l.64 2.35c.22.85.98 1.48 1.87 1.57l2.05.2c1.03.1 1.94-.56 2.12-1.53l.2-1.04c.2-1.02-.2-2.1-1.02-2.83z" fill={primaryFill} /><path d="M11.75 14c.41 0 .75.34.75.75v1.75h1a.75.75 0 010 1.5h-1.75a.75.75 0 01-.75-.75v-2.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M12 11a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm-4 5.5a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
}

const CallMissed24Filled = wrapIcon(rawSvg({}), 'CallMissed24Filled');
export default CallMissed24Filled;
      