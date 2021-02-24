import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Payment28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 16.4a.9.9 0 000 1.8h3a.9.9 0 000-1.8h-3z" fill={primaryFill} /><path d="M4.75 5A2.75 2.75 0 002 7.75v11.5A2.75 2.75 0 004.75 22h18.5A2.75 2.75 0 0026 19.25V7.75A2.75 2.75 0 0023.25 5H4.75zM3.5 19.25V11.5h21v7.75c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25zm0-9.25V7.75c0-.69.56-1.25 1.25-1.25h18.5c.69 0 1.25.56 1.25 1.25V10h-21z" fill={primaryFill} /></svg>;
};

export default Payment28Regular;