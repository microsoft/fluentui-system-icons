import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronLeft28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.03 22.78c-.3.3-.77.3-1.06 0l-8.75-8.75a.75.75 0 010-1.06l8.75-8.75a.75.75 0 111.06 1.06L9.81 13.5l8.22 8.22c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
};

export default ChevronLeft28Regular;