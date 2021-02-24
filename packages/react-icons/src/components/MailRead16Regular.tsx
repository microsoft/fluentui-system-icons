import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MailRead16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.24 1.56a.5.5 0 00-.48 0L1.8 4.78A1.5 1.5 0 001 6.1V12c0 1.1.9 2 2 2h10a2 2 0 002-2V6.1c0-.55-.3-1.06-.79-1.32L8.24 1.56zm-5.98 4.1L8 2.56l5.74 3.1a.5.5 0 01.15.13L8 8.93 2.1 5.8a.5.5 0 01.16-.13zM2 6.86l5.76 3.08a.5.5 0 00.48 0L14 6.87V12a1 1 0 01-1 1H3a1 1 0 01-1-1V6.87z" fill={primaryFill} /></svg>;
};

export default MailRead16Regular;