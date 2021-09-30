import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.68 2.4c.2-.37.65-.5 1.02-.3a4.9 4.9 0 011.72 6.49.75.75 0 01-1.34-.7l.05-.09a3.4 3.4 0 00-1.16-4.39.75.75 0 01-.3-1.02z" fill={primaryFill} /><path d="M14.69 15.28a.75.75 0 00-.92-.53l-1.93.52-.1.03a.75.75 0 00.49 1.42l1.93-.52.1-.04a.75.75 0 00.43-.88z" fill={primaryFill} /><path d="M15.1 5.66a2.25 2.25 0 00-2.76-1.59L7.74 5.3a2.25 2.25 0 00-1.58 2.76L8.9 18.34a2.25 2.25 0 002.76 1.6l4.6-1.23a2.25 2.25 0 001.58-2.76L15.1 5.66zm-2.37-.14c.4-.1.81.13.92.53l2.76 10.29c.1.4-.14.81-.54.92l-4.6 1.23a.75.75 0 01-.91-.53L7.61 7.67c-.11-.4.13-.81.53-.92l4.59-1.23z" fill={primaryFill} /><path d="M18.55 4.3a.75.75 0 10-.9 1.2l.03.02c.04.04.1.1.15.18.08.1.14.21.17.31a1.07 1.07 0 01-.03.58l-.05.14a.75.75 0 001.41.49l.05-.13.05-.18c.1-.41.13-.85.01-1.29a2.6 2.6 0 00-.9-1.32z" fill={primaryFill} /><path d="M2.54 15.41a.75.75 0 011.34.66l-.1.2-.1.28a3.54 3.54 0 00.6 3.36c.26.32.51.54.68.65l.07.04a.75.75 0 11-.75 1.3 5.04 5.04 0 01-1.74-6.49z" fill={primaryFill} /><path d="M5.65 16.35a.75.75 0 00-.98.4 1.8 1.8 0 00-.04.14l-.05.17c-.1.41-.13.85-.01 1.28a2.61 2.61 0 00.89 1.32.75.75 0 00.9-1.18l-.03-.03c-.04-.04-.1-.1-.15-.18a.95.95 0 01-.17-.31 1.07 1.07 0 01.03-.58l.05-.15a.75.75 0 00-.44-.88z" fill={primaryFill} /></svg>;
}

const PhoneShake24Regular = wrapIcon(rawSvg({}), 'PhoneShake24Regular');
export default PhoneShake24Regular;
      