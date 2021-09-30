import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 7v2.6A5.5 5.5 0 009.6 17H5.5A2.5 2.5 0 013 14.5V7h14z" fill={primaryFill} /><path d="M14.5 3A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9z" fill={primaryFill} /><path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1.1-7.17a.5.5 0 01.48-.33h1.18a.5.5 0 01.47.66l-.28.84H16a.5.5 0 01.42.77l-2.25 3.5a.5.5 0 01-.9-.4l.5-1.87H13a.5.5 0 01-.47-.67l.88-2.5z" fill={primaryFill} /></svg>;
}

const CalendarAssistantFilled = wrapIcon(rawSvg({}), 'CalendarAssistantFilled');
export default CalendarAssistantFilled;
      