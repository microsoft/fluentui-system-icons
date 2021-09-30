import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14zM14 5H2v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5zm-3.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM9.4 7.83a.5.5 0 01.48-.33h1.18a.5.5 0 01.47.66l-.28.84H12a.5.5 0 01.42.77l-2.25 3.5a.5.5 0 01-.9-.4l.5-1.87H9a.5.5 0 01-.47-.67l.88-2.5z" fill={primaryFill} /></svg>;
}

const CalendarAssistant16Filled = wrapIcon(rawSvg({}), 'CalendarAssistant16Filled');
export default CalendarAssistant16Filled;
      