import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14zM14 5H2v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5zm-3.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.35-2.15a.5.5 0 01-.7-.7L11.29 11H8.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" fill={primaryFill} /></svg>;
}

const CalendarArrowRight16Filled = wrapIcon(rawSvg({}), 'CalendarArrowRight16Filled');
export default CalendarArrowRight16Filled;
      