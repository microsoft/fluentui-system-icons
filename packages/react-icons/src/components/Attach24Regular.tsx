import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Attach24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.77 3.74a6 6 0 018.66 8.3l-.19.2-8.8 8.8-.03.03a3.72 3.72 0 01-5.4-5.1l.05-.06.08-.1.14-.14 7.44-7.45c.27-.27.68-.3.98-.07l.08.07c.27.26.3.68.08.98l-.08.08-7.59 7.61a2.23 2.23 0 003.17 3.1l8.84-8.82A4.5 4.5 0 0013 4.64l-.17.16-.01.02-9.54 9.53a.75.75 0 01-1.13-.97l.07-.09 9.55-9.55z" fill={primaryFill} /></svg>;
};

export default Attach24Regular;