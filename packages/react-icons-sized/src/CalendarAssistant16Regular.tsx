import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1.76A5.48 5.48 0 0010.5 5H13v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h7.5c-1.18 0-2.27.37-3.16 1H3v5.5c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7zm-1 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM9.4 7.83a.5.5 0 01.48-.33h1.18a.5.5 0 01.47.66l-.28.84H12a.5.5 0 01.42.77l-2.25 3.5a.5.5 0 01-.9-.4l.5-1.87H9a.5.5 0 01-.47-.67l.88-2.5z" fill={primaryFill} /></svg>;
}

const CalendarAssistant16Regular = wrapIcon(rawSvg({}), 'CalendarAssistant16Regular');
export default CalendarAssistant16Regular;
      