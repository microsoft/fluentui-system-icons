import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareScreenStop48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.23 24l-5.86-5.87a1.25 1.25 0 011.76-1.76L24 22.23l5.87-5.86a1.25 1.25 0 011.76 1.76L25.77 24l5.86 5.87a1.25 1.25 0 01-1.76 1.76L24 25.77l-5.87 5.86a1.25 1.25 0 01-1.76-1.76L22.23 24z" fill={primaryFill} /><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v22.5A4.75 4.75 0 0139.25 40H8.75A4.75 4.75 0 014 35.25v-22.5zm4.75-2.25c-1.24 0-2.25 1-2.25 2.25v22.5c0 1.24 1 2.25 2.25 2.25h30.5c1.24 0 2.25-1 2.25-2.25v-22.5c0-1.24-1-2.25-2.25-2.25H8.75z" fill={primaryFill} /></svg>;
};

export default ShareScreenStop48Regular;