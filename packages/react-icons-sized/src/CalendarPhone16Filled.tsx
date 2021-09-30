import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 7.5c0-.56.19-1.08.5-1.5H2v5.5A2.5 2.5 0 004.5 14h3.55a2.51 2.51 0 01-.05-.5v-6zM2 5v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5H2zm8.75 1C9.78 6 9 6.78 9 7.75v5.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-5.5C15 6.78 14.22 6 13.25 6h-2.5zm.25 6.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const CalendarPhone16Filled = wrapIcon(rawSvg({}), 'CalendarPhone16Filled');
export default CalendarPhone16Filled;
      