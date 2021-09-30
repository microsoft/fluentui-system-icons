import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v2.55a2.51 2.51 0 00-.5-.05H16V7H4v7.5c0 .83.67 1.5 1.5 1.5H11v.5c0 .17.02.34.05.5H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5zm-.75 5c-.97 0-1.75.78-1.75 1.75v5.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-5.5C18 9.78 17.22 9 16.25 9h-2.5zm.25 6.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const CalendarPhone20Regular = wrapIcon(rawSvg({}), 'CalendarPhone20Regular');
export default CalendarPhone20Regular;
      