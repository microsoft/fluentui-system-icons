import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailUnread16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5.8l6.28 3.15c.14.07.3.07.44 0l4.26-2.13a3 3 0 002.02 0V11a2 2 0 01-2 2H3a2 2 0 01-2-2V5.8zM3 3h7.17a3 3 0 00.8 3.2L7.5 7.95 1.02 4.7A2 2 0 013 3zm10-1a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /></svg>;
};

export default MailUnread16Filled;