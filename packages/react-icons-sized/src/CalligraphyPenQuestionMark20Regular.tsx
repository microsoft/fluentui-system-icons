import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-4.5 1.88a.62.62 0 110 1.25.62.62 0 010-1.25zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0c-.01-1.13.8-1.95 1.85-1.95zm.35 8.49a5.64 5.64 0 01-1.09-.04l-3.26 5.56v-5.64a1 1 0 10-1 0v5.64l-3.28-5.6a1.5 1.5 0 01-.07-1.4L7.82 6h1.2a5.57 5.57 0 010-1H6.5a.5.5 0 01-.5-.5v-2a.5.5 0 00-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 00.1 2.33l3.47 5.91a1.37 1.37 0 002.36 0l3.47-5.9c.08-.14.14-.28.2-.43z" fill={primaryFill} /></svg>;
}

const CalligraphyPenQuestionMark20Regular = wrapIcon(rawSvg({}), 'CalligraphyPenQuestionMark20Regular');
export default CalligraphyPenQuestionMark20Regular;
      