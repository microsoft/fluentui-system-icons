import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookmarkOff24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.79 2.79v15.18c0 .6.68.96 1.18.6L12 17.67l5.81 4.18c.5.36 1.2 0 1.2-.6v-1.19l1.7 1.72a.75.75 0 001.07-1.06L3.28 2.22zM17.5 18.56v1.22l-5.06-3.64a.75.75 0 00-.88 0L6.5 19.78V7.56l11 11z" fill={primaryFill} /><path d="M17.5 6.25v8.07l1.5 1.5V6.25C19 4.45 17.55 3 15.75 3h-7.5c-.6 0-1.15.16-1.63.44l1.13 1.13c.16-.05.33-.07.5-.07h7.5c.97 0 1.75.78 1.75 1.75z" fill={primaryFill} /></svg>;
};

export default BookmarkOff24Regular;