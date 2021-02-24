import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WindowMultiple20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v8A2.5 2.5 0 004.5 15h8a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0012.5 2h-8zM3 12.5V6h11v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 013 12.5zM3 5v-.5C3 3.67 3.67 3 4.5 3h8c.83 0 1.5.67 1.5 1.5V5H3z" fill={primaryFill} /><path d="M7.5 18a2.5 2.5 0 01-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 003-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 012 2.45V14a4 4 0 01-4 4H7.5z" fill={primaryFill} /></svg>;
};

export default WindowMultiple20Regular;