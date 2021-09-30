import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.54 2.12a4.1 4.1 0 00-2.99.32 2.87 2.87 0 00-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 009 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 001.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 00-3.07-1.12l-.67.26c-.32.12-.62.06-.79-.1A4.32 4.32 0 017.1 9.19c-.06-.26.06-.56.34-.78l.6-.45a2.5 2.5 0 00.67-3.24l-.97-1.7c-.26-.45-.7-.77-1.2-.9zm-3.5 2.85c.02-.77.41-1.33 1-1.65a3.1 3.1 0 012.25-.23c.24.06.45.22.58.43l.97 1.7c.38.66.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.79.22.98.7 1.9 1.42 2.61.52.51 1.27.54 1.85.32l.66-.25a1.5 1.5 0 011.85.66l.95 1.7c.12.22.14.48.06.7a2.91 2.91 0 01-1.45 1.66 1.9 1.9 0 01-1.9-.16 15.3 15.3 0 01-4.64-5.15 12.28 12.28 0 01-1.89-6.53z" fill={primaryFill} /><path d="M12.5 2a.5.5 0 00-.5.5v7a.5.5 0 101 0V7h1.5a2.5 2.5 0 000-5h-2zm2 4H13V3h1.5a1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
}

const CallPark20Regular = wrapIcon(rawSvg({}), 'CallPark20Regular');
export default CallPark20Regular;
      