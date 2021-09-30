import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 17.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5zm-1.5 0V6.25c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75zm-2.5-10c0 .38-.28.7-.65.74l-.1.01h-8.5a.75.75 0 01-.1-1.5h8.6c.41 0 .75.34.75.75zm0 8.5c0 .38-.28.7-.65.74l-.1.01h-8.5a.75.75 0 01-.1-1.5h8.6c.41 0 .75.34.75.75zM17 12c0 .38-.28.7-.65.74l-.1.01h-8.5a.75.75 0 01-.1-1.5h8.6c.41 0 .75.34.75.75z" fill={primaryFill} /></svg>;
}

const CalendarAgenda24Regular = wrapIcon(rawSvg({}), 'CalendarAgenda24Regular');
export default CalendarAgenda24Regular;
      