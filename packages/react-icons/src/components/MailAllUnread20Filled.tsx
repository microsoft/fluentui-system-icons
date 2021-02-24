import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailAllUnread20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={primaryFill} /><path d="M11.34 3H4.5a2.5 2.5 0 00-2.48 2.22L9 8.92l3.26-1.73A3.5 3.5 0 0111.34 3z" fill={primaryFill} /><path d="M13.3 7.8L9.26 9.92a.5.5 0 01-.5 0L2 6.37v6.13A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5V7.66a3.49 3.49 0 01-2.7.13z" fill={primaryFill} /><path d="M6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-5c.6.46 1 1.18 1 2v3a4.5 4.5 0 01-4.5 4.5h-7z" fill={primaryFill} /></svg>;
};

export default MailAllUnread20Filled;