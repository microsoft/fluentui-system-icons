import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tab28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.86 6.5A3.5 3.5 0 016.36 3h15a3.5 3.5 0 013.5 3.5v15a3.5 3.5 0 01-3.5 3.5h-15a3.5 3.5 0 01-3.5-3.5v-15zM6.36 5c-.83 0-1.5.67-1.5 1.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5h-15z" fill={primaryFill} /></svg>;
};

export default Tab28Filled;