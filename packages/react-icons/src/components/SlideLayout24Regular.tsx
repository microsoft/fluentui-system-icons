import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SlideLayout24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 7C5.78 7 5 7.78 5 8.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C19 7.78 18.22 7 17.25 7H6.75zM6.5 8.75c0-.14.11-.25.25-.25h10.5c.14 0 .25.11.25.25v1.75h-11V8.75zm4 3.25h7v3.25c0 .14-.11.25-.25.25H10.5V12zM9 12v3.5H6.75a.25.25 0 01-.25-.25V12H9z" fill={primaryFill} /><path d="M4.75 4A2.75 2.75 0 002 6.75v10.5A2.75 2.75 0 004.75 20h14.5A2.75 2.75 0 0022 17.25V6.75A2.75 2.75 0 0019.25 4H4.75zM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25V6.75z" fill={primaryFill} /></svg>;
};

export default SlideLayout24Regular;