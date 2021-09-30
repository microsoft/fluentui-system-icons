import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4a5 5 0 00-5 5v1h24V9a5 5 0 00-5-5H9zM4 23V12h24v11a5 5 0 01-5 5H9a5 5 0 01-5-5zm6.5-5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 3.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5-6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm4 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={primaryFill} /></svg>;
}

const CalendarLtr32Filled = wrapIcon(rawSvg({}), 'CalendarLtr32Filled');
export default CalendarLtr32Filled;
      