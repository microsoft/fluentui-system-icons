import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowAutofitHeight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.95 5.9l.09-.1 2.35-2.36c.18-.27.5-.44.86-.44.32 0 .62.14.8.37h.01l.05.07 2.36 2.36.08.1a1 1 0 01.01 1.18v.01l-.1.12-.1.09h-.01a1 1 0 01-1.18.01l-.12-.1-.8-.8V9.71l-.01.01c-.07.47-.51.78-.99.78s-.92-.31-.99-.78l-.01-.12V6.41l-.8.8-.1.09a1 1 0 01-1.4-1.4z" fill={primaryFill} /><path d="M4 6.5A2.5 2.5 0 016.5 4h4a1 1 0 110 2h-4a.5.5 0 00-.5.5v11c0 .27.22.5.5.5h4a1 1 0 110 2h-4A2.5 2.5 0 014 17.5v-11z" fill={primaryFill} /><path d="M14.45 16.79l-.1-.09a1 1 0 00-1.3 1.5l2.34 2.36c.18.27.5.44.86.44s.68-.17.86-.44l2.36-2.36.08-.1a1 1 0 00-.09-1.3v-.01l-.1-.09h-.01a1 1 0 00-1.3.1l-.8.79v-3.31c-.08-.47-.52-.78-1-.78-.52 0-1 .38-1 .9v3.19l-.8-.8z" fill={primaryFill} /></svg>;
};

export default ArrowAutofitHeight24Filled;