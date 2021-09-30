import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.25-9C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V8.5h-15v9.25c0 .97.78 1.75 1.75 1.75h5.06c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-.25 11h-.09a.5.5 0 00-.4.41l-.01.09V17h-2.59a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4l.09.01H17v2.59c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41l.01-.09V18h2.59a.5.5 0 00.4-.41l.01-.09v-.09a.5.5 0 00-.41-.4L20.5 17H18v-2.59a.5.5 0 00-.41-.4L17.5 14zm.25-9.5H6.25c-.97 0-1.75.78-1.75 1.75V7h15v-.75c0-.97-.78-1.75-1.75-1.75z" fill={primaryFill} /></svg>;
}

const CalendarAdd24Regular = wrapIcon(rawSvg({}), 'CalendarAdd24Regular');
export default CalendarAdd24Regular;
      