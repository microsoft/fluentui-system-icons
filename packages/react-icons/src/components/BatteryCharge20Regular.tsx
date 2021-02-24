import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatteryCharge20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 7.35v.98l1.17.02a.83.83 0 01.82.73l.01.1v1.67a.83.83 0 01-.72.82l-.11.01H16v.82a2.5 2.5 0 01-2.35 2.5H7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6.76c.65 0 1.18-.5 1.24-1.13V7.25c0-.66-.49-1.19-1.12-1.25H9.54C9.2 6 9 5.85 9 5.5s.22-.5.54-.5h3.96A2.5 2.5 0 0116 7.35zM6.3 3.34h.08c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9H3.46C2.66 9 2 8.35 2 7.54V5.63c0-.34.28-.62.63-.62H3V3.96c0-.31.24-.57.54-.62h.08c.32 0 .58.23.62.54l.01.08v1.05L5.75 5V3.96c0-.32.24-.58.54-.62zM5.5 9v5.5a.5.5 0 11-1 0V9h1zM7 6v1.5a.5.5 0 01-.41.5H3.5a.5.5 0 01-.5-.41V6h4z" fill={primaryFill} /></svg>;
};

export default BatteryCharge20Regular;