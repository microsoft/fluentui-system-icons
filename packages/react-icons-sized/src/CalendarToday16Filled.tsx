import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 11.5V6H2v5.5A2.5 2.5 0 004.5 14h2v-1.25a1.5 1.5 0 01-.96-2.65l1.27-1.06A1.75 1.75 0 018 6a1.75 1.75 0 011.19 3.04l1.27 1.06a1.5 1.5 0 01-.96 2.65V14h2a2.5 2.5 0 002.5-2.5z" fill={primaryFill} /><path d="M7.96 9.5a.5.5 0 01.36.12l1.5 1.25a.5.5 0 01-.64.76l-.68-.56v3.43a.5.5 0 01-.5.5" fill={primaryFill} /><path d="M7.96 9.5a.5.5 0 00-.13.03l.13-.03z" fill={primaryFill} /><path d="M14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12v-.5z" fill={primaryFill} /><path d="M8 8.5A.75.75 0 108 7a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M8 9.5a.5.5 0 00-.04 0l-.13.03a.5.5 0 00-.15.09l-1.5 1.25a.5.5 0 10.64.76l.68-.56v3.43a.5.5 0 00.5.5.5.5 0 00.5-.5v-3.43l.68.56a.5.5 0 00.41.11.5.5 0 00.23-.87l-1.5-1.25A.5.5 0 008 9.5z" fill={primaryFill} /></svg>;
}

const CalendarToday16Filled = wrapIcon(rawSvg({}), 'CalendarToday16Filled');
export default CalendarToday16Filled;
      