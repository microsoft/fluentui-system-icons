import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14z" fill={primaryFill} /><path d="M14 5H2v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L9.5 11.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const CalendarCheckmark16Filled = wrapIcon(rawSvg({}), 'CalendarCheckmark16Filled');
export default CalendarCheckmark16Filled;
      