import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowNew24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 17.98v-.14c1.17-.5 2-1.65 2-3V6.25C21 4.45 19.54 3 17.75 3h-8.5c-1.45 0-2.67.94-3.1 2.25h-.2a2.8 2.8 0 00-2.22.95A3.5 3.5 0 003 8.5v8.75c0 1.06.38 2.01 1.11 2.7A4.13 4.13 0 007 21h8c.97 0 1.94-.2 2.7-.68a2.7 2.7 0 001.3-2.34zM5.96 6.75H6v8.09c0 1.8 1.46 3.25 3.25 3.25h8.25c-.04.42-.25.73-.62.97-.43.27-1.09.44-1.88.44H7c-.84 0-1.46-.27-1.86-.64-.4-.38-.64-.92-.64-1.61V8.5c0-.63.16-1.07.38-1.33.2-.24.53-.42 1.08-.42zm6.06-.25h4.73c.41 0 .75.34.75.75v4.73a.75.75 0 01-1.5 0V9.06l-5.22 5.22a.75.75 0 11-1.06-1.06L14.94 8h-2.92a.75.75 0 110-1.5z" fill={primaryFill} /></svg>;
};

export default WindowNew24Filled;