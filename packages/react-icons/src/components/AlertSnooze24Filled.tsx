import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlertSnooze24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 7h-2.6a.75.75 0 00.1 1.5h1.04l-1.65 2.31-.06.1c-.25.48.1 1.09.67 1.09h2.6a.75.75 0 00-.1-1.5h-1.04l1.65-2.31.06-.1A.75.75 0 0015.25 7z" fill={primaryFill} /><path d="M21.25 2h-3.6a.75.75 0 00.1 1.5h2.13l-2.76 4.35-.05.09A.75.75 0 0017.75 9h3.6a.75.75 0 00-.1-1.5h-2.13l2.76-4.35.05-.09A.75.75 0 0021.25 2z" fill={primaryFill} /><path d="M12.7 5.5h2.55c.5 0 .96.16 1.32.42l.62-.99a2.25 2.25 0 01-1.69-2.06 7.5 7.5 0 00-11 6.37v4.26l-1.41 3.16A.95.95 0 003.95 18h16.1a.95.95 0 00.87-1.34L19.5 13.5v-3h-1.75l-.39-.03a2.24 2.24 0 01-1.8 3l-.06.02-.2.01h-2.55a2.25 2.25 0 01-2-3.3l.03-.04.11-.18.38-.53a2.24 2.24 0 011.18-3.93h.05l.2-.02z" fill={primaryFill} /><path d="M14.96 19a3 3 0 01-5.92 0h5.92z" fill={primaryFill} /></svg>;
};

export default AlertSnooze24Filled;