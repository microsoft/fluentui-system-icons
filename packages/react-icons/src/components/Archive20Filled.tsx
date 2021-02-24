import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Archive20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 7v8a3 3 0 01-3 3H6a3 3 0 01-3-3V7h14zm-5.5 2h-3a.5.5 0 000 1h3a.5.5 0 000-1zM17 2a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h14z" fill={primaryFill} /></svg>;
};

export default Archive20Filled;