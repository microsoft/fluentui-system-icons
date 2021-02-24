import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalsApp28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.28 2.22a.75.75 0 10-1.06 1.06l1.7 1.7a10.51 10.51 0 1010.59 10.79.75.75 0 10-1.5-.04 9.01 9.01 0 11-9.06-9.24l-1.73 1.73a.75.75 0 001.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3z" fill={primaryFill} /><path d="M18.28 12.22c.3.3.3.77 0 1.06l-5.25 5.25c-.3.3-.77.3-1.06 0l-2.25-2.25a.75.75 0 011.06-1.06l1.72 1.72 4.72-4.72c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default ApprovalsApp28Regular;