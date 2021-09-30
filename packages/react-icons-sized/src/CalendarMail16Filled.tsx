import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.05 3h9.9A2.5 2.5 0 008.5 1h-5a2.5 2.5 0 00-2.45 2zM11 4H1v4.5A2.5 2.5 0 003.5 11H4V8.5A2.5 2.5 0 016.5 6H11V4zm-1.22 7.95L5 9.55v3.95c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V9.56l-4.78 2.39a.5.5 0 01-.44 0zM6.5 7c-.8 0-1.47.64-1.5 1.44l5 2.5 5-2.5A1.5 1.5 0 0013.5 7h-7z" fill={primaryFill} /></svg>;
}

const CalendarMail16Filled = wrapIcon(rawSvg({}), 'CalendarMail16Filled');
export default CalendarMail16Filled;
      