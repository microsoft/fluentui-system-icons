import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pulse24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.46 6.8l3.29 13.63c.17.73 1.2.77 1.44.05l3.26-10.12.58 2.1c.1.32.39.54.72.54h3.5a.75.75 0 000-1.5h-2.93l-1.1-3.95a.75.75 0 00-1.44-.03l-3.2 9.96-3.35-13.9c-.19-.76-1.26-.77-1.46-.02l-2.1 7.94H2.75a.75.75 0 000 1.5h3.5c.34 0 .63-.23.72-.56l1.5-5.63z" fill={primaryFill} /></svg>;
};

export default Pulse24Regular;