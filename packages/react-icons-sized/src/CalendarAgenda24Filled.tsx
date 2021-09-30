import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 17.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5zm-4-10c0-.38-.28-.7-.65-.74l-.1-.01h-8.6a.75.75 0 000 1.5h8.7a.75.75 0 00.65-.75zm0 8.5c0-.38-.28-.7-.65-.74l-.1-.01h-8.6a.75.75 0 000 1.5h8.7a.75.75 0 00.65-.75zM17 12c0-.38-.28-.7-.65-.74l-.1-.01h-8.6a.75.75 0 000 1.5h8.7A.75.75 0 0017 12z" fill={primaryFill} /></svg>;
}

const CalendarAgenda24Filled = wrapIcon(rawSvg({}), 'CalendarAgenda24Filled');
export default CalendarAgenda24Filled;
      