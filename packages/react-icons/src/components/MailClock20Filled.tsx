import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailClock20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.37v4.89A5.5 5.5 0 009.02 15H4.5A2.5 2.5 0 012 12.5V5.37l7.75 4.56c.15.1.35.1.5 0L18 5.37z" fill={primaryFill} /><path d="M15.5 2a2.5 2.5 0 012.48 2.22L10 8.92l-7.98-4.7A2.5 2.5 0 014.5 2h11z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default MailClock20Filled;