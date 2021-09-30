import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.15 2.3l.07-.08a.75.75 0 01.98-.08l.08.08 18.5 18.5c.27.27.3.69.07.98l-.07.09a.75.75 0 01-.98.07l-.08-.07-6.6-6.61-6.32 6.59c-.51.53-1.38.09-1.3-.6l.03-.1L8.29 14H5.75a.75.75 0 01-.74-.86l.02-.1 1.54-5.4-4.35-4.36a.75.75 0 01-.07-.98l.07-.08-.07.08zm6.6-.3h7c.48 0 .82.44.74.89l-.03.1L14.8 8h4.46c.62 0 .96.7.61 1.19l-.07.08L16.2 13 7.53 4.33l.5-1.79c.1-.28.33-.49.62-.53L8.75 2z" fill={primaryFill} /></svg>;
}

const FlashOff24Filled = wrapIcon(rawSvg({}), 'FlashOff24Filled');
export default FlashOff24Filled;
      