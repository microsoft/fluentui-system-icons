import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareIos48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.75 20.25c.92 0 1.67.7 1.74 1.6l.01.15v14.25c0 3.1-2.46 5.63-5.53 5.75H14.25a5.75 5.75 0 01-5.75-5.53V22a1.75 1.75 0 013.5-.14v14.39c0 1.2.93 2.17 2.1 2.24l.15.01h19.5c1.2 0 2.17-.93 2.24-2.1l.01-.15V22c0-.97.78-1.75 1.75-1.75zM23.5 6.27l.15-.02h.17l.16.01.17.04.07.01c.2.06.39.15.56.27l.12.1.09.08 7.78 7.78a1.75 1.75 0 01-2.35 2.59l-.13-.11-4.79-4.8V31.5c0 .92-.7 1.67-1.6 1.74l-.15.01c-.92 0-1.67-.7-1.74-1.6L22 31.5V12.23l-4.79 4.79c-.64.64-1.66.68-2.35.1l-.12-.1a1.75 1.75 0 01-.12-2.35l.12-.13 7.75-7.75c.05-.06.11-.12.18-.17l.11-.08.12-.07h.02c.17-.1.37-.17.58-.2z" fill={primaryFill} /></svg>;
};

export default ShareIos48Filled;