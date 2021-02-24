import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailInboxDismiss16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L10.5 4.79 9.35 3.65a.5.5 0 10-.7.7L9.79 5.5 8.65 6.65a.5.5 0 10.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7L11.21 5.5l1.14-1.15z" fill={primaryFill} /><path d="M10.5 11h.12c-.47.93-1.34 1.5-2.62 1.5-1.29 0-2.16-.58-2.63-1.53a3.54 3.54 0 01-.3-.8L5.05 10H3v2.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-2.1c.36-.18.7-.4 1-.66v2.76a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 12.5v-7A2.5 2.5 0 014.5 3h1.1c-.16.32-.3.65-.4 1h-.7C3.67 4 3 4.67 3 5.5V9h2.5c.28 0 .5.22.5.5a2.55 2.55 0 00.26 1.03c.3.61.84.97 1.74.97.7 0 1.17-.21 1.5-.6.32.07.66.1 1 .1z" fill={primaryFill} /></svg>;
};

export default MailInboxDismiss16Regular;