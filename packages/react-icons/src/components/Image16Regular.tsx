import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Image16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 5.5a1 1 0 11-2 0 1 1 0 012 0zM2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM4.5 3C3.67 3 3 3.67 3 4.5v7c0 .23.05.45.15.65L6.8 8.49a1.7 1.7 0 012.4 0l3.65 3.66c.1-.2.15-.42.15-.65v-7c0-.83-.67-1.5-1.5-1.5h-7zm7.65 9.85L8.5 9.2a.7.7 0 00-1 0l-3.65 3.65c.2.1.42.15.65.15h7c.23 0 .45-.05.65-.15z" fill={primaryFill} /></svg>;
};

export default Image16Regular;