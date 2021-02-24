import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleBus16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M6.5 10.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M10.25 11a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M2 3.9C2 2.3 3.3 1 4.9 1h6.2C12.7 1 14 2.3 14 3.9V6h.5a.5.5 0 010 1H14v6.7c0 .72-.58 1.3-1.3 1.3h-1.4a1.3 1.3 0 01-1.3-1.3V13H6v.7c0 .72-.58 1.3-1.3 1.3H3.3A1.3 1.3 0 012 13.7V7h-.5a.5.5 0 010-1H2V3.9zm11 0A1.9 1.9 0 0011.1 2H4.9A1.9 1.9 0 003 3.9V8h10V3.9zM11 13v.7c0 .17.13.3.3.3h1.4a.3.3 0 00.3-.3V13h-2zm-8 0v.7c0 .17.13.3.3.3h1.4a.3.3 0 00.3-.3V13H3zm0-1h10V9H3v3z" fill={primaryFill} /></svg>;
};

export default VehicleBus16Regular;