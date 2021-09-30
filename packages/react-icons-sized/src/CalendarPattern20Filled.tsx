import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3h8.5A2.75 2.75 0 0117 5.75v8.5A2.75 2.75 0 0114.25 17h-8.5A2.75 2.75 0 013 14.25v-8.5A2.75 2.75 0 015.75 3zM4.5 5.75V7h11V5.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25zM14.7 8l-4 4h2.6l2.2-2.2V8h-.8zm-1.4 0h-2.6l-4 4h2.6l4-4zm-8 4l4-4H6.7l-2.2 2.2V12h.8zm-.8-3.2l.8-.8h-.8v.8zM14.7 12h.8v-.8l-.8.8z" fill={primaryFill} /></svg>;
}

const CalendarPattern20Filled = wrapIcon(rawSvg({}), 'CalendarPattern20Filled');
export default CalendarPattern20Filled;
      