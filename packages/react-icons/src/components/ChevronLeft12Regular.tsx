import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronLeft12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.35 2.15c.2.2.2.5 0 .7L4.21 6l3.14 3.15a.5.5 0 11-.7.7l-3.5-3.5a.5.5 0 010-.7l3.5-3.5c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
};

export default ChevronLeft12Regular;