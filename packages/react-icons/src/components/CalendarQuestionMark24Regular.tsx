import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarQuestionMark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h5.77c-.3-.46-.53-.97-.7-1.5H6.24c-.97 0-1.75-.78-1.75-1.75V8.5h15v2.81c.53.18 1.04.42 1.5.71V6.25zM6.25 4.5h11.5c.97 0 1.75.78 1.75 1.75V7h-15v-.75c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6.12 2.88a.62.62 0 111.24 0 .62.62 0 01-1.24 0zm-1.23-4.55c-.01-1.14.8-1.96 1.85-1.96 1.03 0 1.85.85 1.85 1.95 0 .51-.15.85-.52 1.3l-.14.15-.27.3-.1.1-.08.11c-.18.23-.24.39-.24.6a.5.5 0 11-1 0c0-.53.15-.86.53-1.32l.14-.16.27-.29.1-.1.09-.12c.17-.22.22-.37.22-.57 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0z" fill={primaryFill} /></svg>;
};

export default CalendarQuestionMark24Regular;