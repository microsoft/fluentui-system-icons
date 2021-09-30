import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.5A2.5 2.5 0 014.5 4H7v2H4.5a1.5 1.5 0 100 3H7v7H4.5A2.5 2.5 0 012 13.5v-7zM8 16V9.5c0 .83.67 1.5 1.5 1.5H11v.5c0 .65.42 1.2 1 1.41V16H8zm2-8h2V4H8v2h.5c.83 0 1.5.67 1.5 1.5V8zm5.5 5H13v3h2.5a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4H13v4h.5c.83 0 1.5.67 1.5 1.5v.5h.5a1.5 1.5 0 010 3zm-11-6a.5.5 0 000 1h4a.5.5 0 000-1h-4zM9 9.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm3.5 1.5a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
}

const GanttChartFilled = wrapIcon(rawSvg({}), 'GanttChartFilled');
export default GanttChartFilled;
      