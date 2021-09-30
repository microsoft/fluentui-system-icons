import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.48 3.02a.5.5 0 000 .71l1.77 1.77-1.76 1.77a.5.5 0 10.7.7l1.77-1.76 1.77 1.77a.5.5 0 10.7-.71l-1.76-1.77 1.77-1.77a.5.5 0 00-.7-.7l-1.78 1.76-1.77-1.77a.5.5 0 00-.7 0zM21 8.5v3.52A6.5 6.5 0 0012.02 21H6.25A3.25 3.25 0 013 17.75V8.5h18zM17.75 3C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /></svg>;
}

const CalendarCancel24Filled = wrapIcon(rawSvg({}), 'CalendarCancel24Filled');
export default CalendarCancel24Filled;
      