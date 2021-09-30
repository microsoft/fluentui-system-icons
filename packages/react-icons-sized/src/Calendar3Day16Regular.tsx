import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 5.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm2.5 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm2.5 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm3-1A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7zm-11 7v-7C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5z" fill={primaryFill} /></svg>;
}

const Calendar3Day16Regular = wrapIcon(rawSvg({}), 'Calendar3Day16Regular');
export default Calendar3Day16Regular;
      