import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Sim20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5a3 3 0 013-3h3.46a3 3 0 012.13.88l2.53 2.53A3 3 0 0116 7.54V15a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3 5.5v.5h3V9H8.5C7.67 9 7 9.67 7 10.5zM7 12v1.5c0 .83.67 1.5 1.5 1.5H10v-3H7zm4.5 3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H11v6h.5z" fill={primaryFill} /></svg>;
};

export default Sim20Filled;