import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pause24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 3C4.78 3 4 3.78 4 4.75v14.5c0 .97.78 1.75 1.75 1.75h3.5c.96 0 1.75-.78 1.75-1.75V4.75C11 3.78 10.2 3 9.25 3h-3.5zM5.5 4.75c0-.14.1-.25.25-.25h3.5c.13 0 .25.11.25.25v14.5c0 .14-.12.25-.25.25h-3.5a.25.25 0 01-.25-.25V4.75z" fill={primaryFill} /><path d="M14.75 3C13.78 3 13 3.78 13 4.75v14.5c0 .97.78 1.75 1.75 1.75h3.5c.96 0 1.75-.78 1.75-1.75V4.75C20 3.78 19.2 3 18.25 3h-3.5zm-.25 1.75c0-.14.1-.25.25-.25h3.5c.13 0 .25.11.25.25v14.5c0 .14-.12.25-.25.25h-3.5a.25.25 0 01-.25-.25V4.75z" fill={primaryFill} /></svg>;
};

export default Pause24Regular;