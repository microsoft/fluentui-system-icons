import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CommentAdd28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M27 7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-6-4a.5.5 0 00-1 0V7h-3.5a.5.5 0 000 1H20v3.5a.5.5 0 001 0V8h3.5a.5.5 0 000-1H21V3.5z" fill={primaryFill} /><path d="M20.5 15c2.17 0 4.13-.92 5.5-2.4v4.65A3.75 3.75 0 0122.25 21h-5.94l-6.54 4.71C8.62 26.55 7 25.72 7 24.3V21H5.75A3.75 3.75 0 012 17.25V6.75A3.75 3.75 0 015.75 3h8.75a7.5 7.5 0 006 12z" fill={primaryFill} /></svg>;
};

export default CommentAdd28Filled;