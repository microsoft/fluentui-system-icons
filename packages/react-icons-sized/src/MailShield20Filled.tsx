import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 2.62a4.06 4.06 0 01-1-.27 5.16 5.16 0 01-1.72-1.23.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77A5.5 5.5 0 0012.01 9c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V3a.4.4 0 00-.4-.33c-.2 0-.4-.02-.6-.05zm-5.7 8.1l.1.07c.61.48 1.34.85 2.15 1.13.29.1.61.1.9 0A7.36 7.36 0 0018 10.47v4.03a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.05-1.2zM10 4V5.88a6.49 6.49 0 001.54 4.13l-1.54.91-7.98-4.7A2.5 2.5 0 014.5 4H10z" fill={primaryFill} /></svg>;
}

const MailShield20Filled = wrapIcon(rawSvg({}), 'MailShield20Filled');
export default MailShield20Filled;
      