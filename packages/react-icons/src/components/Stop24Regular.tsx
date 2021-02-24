import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Stop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 4.5c.14 0 .25.11.25.25v14.5c0 .14-.11.25-.25.25H4.75a.25.25 0 01-.25-.25V4.75c0-.14.11-.25.25-.25h14.5zM4.75 3C3.78 3 3 3.78 3 4.75v14.5c0 .97.78 1.75 1.75 1.75h14.5c.97 0 1.75-.78 1.75-1.75V4.75C21 3.78 20.22 3 19.25 3H4.75z" fill={primaryFill} /></svg>;
};

export default Stop24Regular;