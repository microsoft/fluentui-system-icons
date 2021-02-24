import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BatteryCharge20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.63 5h3.87A2.5 2.5 0 0116 7.36v.98h1.17a.83.83 0 01.82.73l.01.1v1.67a.83.83 0 01-.72.82H16v.84a2.5 2.5 0 01-2.35 2.5H7.12a.63.63 0 01-.62-.55v-3.83c0-.31.23-.58.54-.62H7.85c.6 0 1.09-.46 1.14-1.04L9 8.85V5.62c0-.31.24-.57.54-.61L9.63 5h3.87-3.88zM6.29 3.34h.09c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9h-.92v5.37c0 .32-.23.58-.54.62L5 15a.63.63 0 01-.62-.54V9h-.92C2.66 9 2 8.35 2 7.54V5.63c0-.34.28-.62.63-.62H3V3.96c0-.31.24-.57.54-.62h.08c.32 0 .58.23.62.54l.01.08v1.05L5.75 5V3.96c0-.32.24-.58.54-.62h.09-.09z" fill={primaryFill} /></svg>;
};

export default BatteryCharge20Filled;