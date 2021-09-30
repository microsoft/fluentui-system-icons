import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 2.62a4.06 4.06 0 01-1-.27 5.16 5.16 0 01-1.72-1.23.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77A5.5 5.5 0 0012.01 9c.27.37.6.7.99 1 .52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V3a.4.4 0 00-.4-.33c-.2 0-.4-.02-.6-.05zM10 4H4.5A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-4.03c-.3.27-.64.52-1 .74v3.29c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l2.05-1.2a6.05 6.05 0 01-.76-.72l-1.54.91L3 6.8v-.3C3 5.67 3.67 5 4.5 5H10V4z" fill={primaryFill} /></svg>;
}

const MailShieldRegular = wrapIcon(rawSvg({}), 'MailShieldRegular');
export default MailShieldRegular;
      