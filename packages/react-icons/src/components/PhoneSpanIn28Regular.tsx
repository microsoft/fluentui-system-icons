import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneSpanIn28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 2A2.75 2.75 0 006 4.75v5.13c.45-.3.98-.42 1.5-.37V4.75c0-.69.56-1.25 1.25-1.25h10.5c.69 0 1.25.56 1.25 1.25v4.76c.52-.05 1.05.07 1.5.37V4.75A2.75 2.75 0 0019.25 2H8.75z" fill={primaryFill} /><path d="M25 14.75a.75.75 0 00-.75-.75h-4.69l1.72-1.72a.75.75 0 10-1.06-1.06l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h4.69c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M22 19.62c-.45.3-.98.42-1.5.37v3.26c0 .69-.56 1.25-1.25 1.25H8.75c-.69 0-1.25-.56-1.25-1.25v-3.26a2.25 2.25 0 01-1.5-.37v3.63A2.75 2.75 0 008.75 26h10.5A2.75 2.75 0 0022 23.25v-3.63z" fill={primaryFill} /><path d="M7.5 11.04a.75.75 0 00-.78 1.24L8.44 14H3.75a.75.75 0 000 1.5h4.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3a.75.75 0 00-.28-.18z" fill={primaryFill} /></svg>;
};

export default PhoneSpanIn28Regular;