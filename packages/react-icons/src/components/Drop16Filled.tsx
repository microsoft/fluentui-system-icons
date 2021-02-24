import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Drop16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.65 1.15c.2-.2.5-.2.7 0 .27.26 1.41 1.45 2.5 3C11.92 5.68 13 7.67 13 9.5c0 1.78-.58 3.16-1.52 4.1C10.55 14.54 9.3 15 8 15c-1.3 0-2.55-.46-3.48-1.4A5.63 5.63 0 013 9.5c0-1.83 1.08-3.82 2.15-5.35a24.33 24.33 0 012.5-3z" fill={primaryFill} /></svg>;
};

export default Drop16Filled;