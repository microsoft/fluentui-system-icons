import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlertSnooze24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5c-3.1 0-6 2.43-6 6.25v4.15L4.68 17h14.67L18 13.9v-2.15a.75.75 0 011.5 0v1.84l1.38 3.16c.36.82-.24 1.75-1.15 1.75H15a3 3 0 01-6 0H4.3c-.9 0-1.5-.91-1.15-1.74L4.5 13.6V9.75a7.53 7.53 0 0110-7.32.75.75 0 01-.5 1.42 5.96 5.96 0 00-2-.35zM12 20c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5z" fill={primaryFill} /><path d="M15.25 7h-2.6a.75.75 0 00.1 1.5h1.04l-1.65 2.31-.06.1c-.25.48.1 1.09.67 1.09h2.6a.75.75 0 00-.1-1.5h-1.04l1.65-2.31.06-.1A.75.75 0 0015.25 7z" fill={primaryFill} /><path d="M21.25 2h-3.6a.75.75 0 00.1 1.5h2.13l-2.76 4.35-.05.09A.75.75 0 0017.75 9h3.6a.75.75 0 00-.1-1.5h-2.13l2.76-4.35.05-.09A.75.75 0 0021.25 2z" fill={primaryFill} /></svg>;
};

export default AlertSnooze24Regular;