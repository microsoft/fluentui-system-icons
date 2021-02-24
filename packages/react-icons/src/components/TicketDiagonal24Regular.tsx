import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TicketDiagonal24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.53 3.6a.75.75 0 00-1.06 0l-9.88 9.87c-.3.3-.3.77 0 1.06l1.07 1.07A2.74 2.74 0 018.75 18c0 .49-.13.94-.35 1.34l1.07 1.07c.3.3.77.3 1.06 0l9.88-9.88c.3-.3.3-.77 0-1.06L19.34 8.4A2.74 2.74 0 0115.25 6c0-.49.13-.94.35-1.34l-1.07-1.07zm-2.12-1.07c.88-.88 2.3-.88 3.18 0l1.17 1.17c.51.51.42 1.23.16 1.66a1.25 1.25 0 001.71 1.71c.44-.25 1.16-.34 1.67.17l1.17 1.17c.88.88.88 2.3 0 3.18l-9.88 9.88c-.88.88-2.3.88-3.18 0L7.24 20.3c-.51-.51-.42-1.23-.16-1.66a1.25 1.25 0 00-1.71-1.71c-.44.25-1.16.34-1.67-.17L2.53 15.6a2.25 2.25 0 010-3.18l9.88-9.88z" fill={primaryFill} /></svg>;
};

export default TicketDiagonal24Regular;