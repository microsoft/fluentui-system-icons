import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 21.75c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5zM19.75 14c0-.38-.28-.7-.65-.74l-.1-.01H8.9a.75.75 0 000 1.5h10.2a.75.75 0 00.65-.75zm0 5.25c0-.38-.28-.7-.65-.74l-.1-.01H8.9a.75.75 0 000 1.5h10.2a.75.75 0 00.65-.75zm0-10.5c0-.38-.28-.7-.65-.74L19 8H8.9a.75.75 0 000 1.5h10.2a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const CalendarAgenda28Filled = wrapIcon(rawSvg({}), 'CalendarAgenda28Filled');
export default CalendarAgenda28Filled;
      