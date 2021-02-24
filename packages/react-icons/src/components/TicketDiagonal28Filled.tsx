import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TicketDiagonal28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.59 2.91a2.56 2.56 0 00-3.72-.1L2.8 14.9c-1.03 1.03-1 2.7.07 3.69l1.38 1.27c.71.66 1.7.51 2.29.27a1.67 1.67 0 012.22 2.05c-.2.62-.27 1.6.44 2.26l1.02.95c1 .93 2.56.9 3.54-.06L25.29 14a2.56 2.56 0 00.1-3.54l-1.07-1.2c-.64-.7-1.6-.66-2.2-.49a1.67 1.67 0 01-2-2.22c.23-.58.36-1.53-.27-2.24l-1.26-1.4z" fill={primaryFill} /></svg>;
};

export default TicketDiagonal28Filled;