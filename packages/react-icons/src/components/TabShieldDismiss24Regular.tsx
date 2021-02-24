import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TabShieldDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.14 5.75A2.75 2.75 0 015.9 3h12.5a2.75 2.75 0 012.75 2.75v5.04a4.83 4.83 0 01-1.5-.83V5.75c0-.69-.56-1.25-1.25-1.25H5.9c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H13a6.68 6.68 0 001.2 1.5h-8.3a2.75 2.75 0 01-2.75-2.75V5.75z" fill={primaryFill} /><path d="M22.5 12c-1.53 0-2.9-.61-4.14-1.85a.5.5 0 00-.71 0A5.72 5.72 0 0113.5 12a.5.5 0 00-.5.5v3.3c.1 3.05 1.74 5.14 4.84 6.17.1.04.22.04.32 0 3.2-1.06 4.84-3.25 4.84-6.47v-3.09a.5.5 0 00-.5-.41zm-6.6 1.9l.07-.06.07-.04a.5.5 0 01.5.04l.06.06 1.4 1.4 1.4-1.4.07-.06a.5.5 0 01.57 0l.06.06.06.07a.5.5 0 010 .56l-.06.07-1.4 1.4 1.4 1.4.06.07a.5.5 0 010 .56l-.06.07-.07.06a.5.5 0 01-.56 0l-.07-.06-1.4-1.4-1.4 1.4-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07 1.4-1.4-1.4-1.4-.06-.07a.5.5 0 010-.56l.06-.07z" fill={primaryFill} /></svg>;
};

export default TabShieldDismiss24Regular;