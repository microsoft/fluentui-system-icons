import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14zM14 5H2v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5zm-3.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.95-5.6H13c.48 0 .69.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 01.96 0l.47 1.53z" fill={primaryFill} /></svg>;
}

const CalendarStar16Filled = wrapIcon(rawSvg({}), 'CalendarStar16Filled');
export default CalendarStar16Filled;
      