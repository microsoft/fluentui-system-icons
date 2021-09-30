import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.32 13.03c.12-.49.37-.93.73-1.29l4.29-4.29a1.55 1.55 0 012.2 0c.61.61.61 1.6 0 2.21l-4.28 4.29c-.36.35-.8.6-1.3.73l-1.2.3a.6.6 0 01-.74-.74l.3-1.2zM14 5v-.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12zm-1 1.04V6H2v5.5A2.5 2.5 0 004.5 14h1.55l.3-1.21c.16-.67.5-1.27 1-1.76l4.28-4.28c.39-.39.87-.63 1.37-.71z" fill={primaryFill} /></svg>;
}

const CalendarEdit16Filled = wrapIcon(rawSvg({}), 'CalendarEdit16Filled');
export default CalendarEdit16Filled;
      