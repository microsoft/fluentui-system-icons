import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Ruler24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3.75C17 2.78 16.22 2 15.25 2h-6.5C7.78 2 7 2.78 7 3.75v11.49a.65.65 0 000 .02v4.99c0 .97.78 1.75 1.75 1.75h6.5c.97 0 1.75-.78 1.75-1.75V3.75zM8.5 16h3.75a.75.75 0 000-1.5H8.5v-1.75h2.75a.75.75 0 000-1.5H8.5V9.5h3.75a.75.75 0 000-1.5H8.5V6.5h2.75a.75.75 0 000-1.5H8.5V3.75c0-.14.11-.25.25-.25h6.5c.14 0 .25.11.25.25v16.5c0 .14-.1.25-.25.25h-6.5a.25.25 0 01-.25-.25V19h2.75a.75.75 0 000-1.5H8.5V16z" fill={primaryFill} /></svg>;
};

export default Ruler24Regular;