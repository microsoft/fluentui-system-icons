import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 8.5v3.52A6.5 6.5 0 0012.02 21H6.25A3.25 3.25 0 013 17.75V8.5h18zM17.75 3C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5zM12 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm8.5-3.5c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.5 2.5 0 00-4.03.04.5.5 0 01-.8-.59 3.5 3.5 0 015.33-.4v-.55c0-.28.22-.5.5-.5zM15 19.95v.55a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-1a2.5 2.5 0 003.91.11.5.5 0 01.77.65 3.5 3.5 0 01-5.18.19z" fill={primaryFill} /></svg>;
}

const CalendarSync24Filled = wrapIcon(rawSvg({}), 'CalendarSync24Filled');
export default CalendarSync24Filled;
      