import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25V7h18v-.75z" fill={primaryFill} /><path d="M21 12.02V8.5H3v9.25C3 19.55 4.46 21 6.25 21h5.77A6.5 6.5 0 0121 12.02z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6.12 2.88a.62.62 0 111.24 0 .62.62 0 01-1.24 0zm-1.23-4.55c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .51-.15.85-.52 1.3l-.14.15-.27.3-.1.1-.08.11c-.18.23-.24.39-.24.6a.5.5 0 11-1 0c0-.53.15-.86.53-1.32l.14-.16.27-.29.1-.1.09-.12c.17-.22.22-.37.22-.57 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0z" fill={primaryFill} /></svg>;
}

const CalendarQuestionMark24Filled = wrapIcon(rawSvg({}), 'CalendarQuestionMark24Filled');
export default CalendarQuestionMark24Filled;
      