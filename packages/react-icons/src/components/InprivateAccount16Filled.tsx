import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const InprivateAccount16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 8c.83 0 1.5.67 1.5 1.5H8v1h4.96c-.05.34-.16.68-.32 1H8v1h3.93c-.86.88-2.2 1.5-3.93 1.5-3.14 0-5-2.03-5-4v-.5C3 8.67 3.67 8 4.5 8h7z" fill={primaryFill} /><path d="M10.7 3.75a2.77 2.77 0 010 1H8v1h2.3a2.75 2.75 0 110-3H8v1h2.7z" fill={primaryFill} /></svg>;
};

export default InprivateAccount16Filled;