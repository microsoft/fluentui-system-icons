import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailClock20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 2A2.5 2.5 0 0118 4.5v5.76a5.5 5.5 0 00-1-.66V5.96l-6.75 3.97a.5.5 0 01-.42.04l-.08-.04L3 5.96v6.54c0 .83.67 1.5 1.5 1.5h4.52a5.57 5.57 0 000 1H4.5A2.5 2.5 0 012 12.5v-8A2.5 2.5 0 014.5 2h11zm0 1h-11C3.67 3 3 3.67 3 4.5v.3l7 4.12 7-4.12v-.3c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default MailClock20Regular;