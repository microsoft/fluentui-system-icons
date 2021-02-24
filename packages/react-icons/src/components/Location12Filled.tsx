import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Location12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 .5A4.5 4.5 0 0110.5 5c0 1.86-1.42 3.81-4.2 5.9a.5.5 0 01-.6 0C2.92 8.81 1.5 6.86 1.5 5A4.5 4.5 0 016 .5zm0 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
};

export default Location12Filled;