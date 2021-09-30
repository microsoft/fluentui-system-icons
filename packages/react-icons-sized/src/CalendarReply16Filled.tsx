import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6v.26c-.1-.1-.22-.18-.34-.26H14z" fill={primaryFill} /><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14z" fill={primaryFill} /><path d="M14 5H2v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5z" fill={primaryFill} /><path d="M10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0113 12.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75H8.71l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7L8.9 7.9a.5.5 0 11.7.7z" fill={primaryFill} /></svg>;
}

const CalendarReply16Filled = wrapIcon(rawSvg({}), 'CalendarReply16Filled');
export default CalendarReply16Filled;
      