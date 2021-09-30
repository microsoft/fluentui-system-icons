import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 8.5v3.52A6.5 6.5 0 0012.02 21H6.25A3.25 3.25 0 013 17.75V8.5h18z" fill={primaryFill} /><path d="M17.75 3C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /><path d="M17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-.4-9h1.43c.35 0 .59.35.47.68L18.5 16h.63c.38 0 .6.41.4.73l-2.63 4.03a.52.52 0 01-.92-.44l.77-2.32h-.78a.5.5 0 01-.47-.68l1.13-3a.5.5 0 01.47-.32z" fill={primaryFill} /></svg>;
}

const CalendarAssistant24Filled = wrapIcon(rawSvg({}), 'CalendarAssistant24Filled');
export default CalendarAssistant24Filled;
      