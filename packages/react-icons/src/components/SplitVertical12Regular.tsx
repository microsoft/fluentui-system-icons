import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitVertical12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 1a.5.5 0 00-.5.5v9a.5.5 0 001 0v-9a.5.5 0 00-.5-.5zm-3 1H4v1H2.5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5H4v1H2.5A1.5 1.5 0 011 8.5v-5C1 2.67 1.67 2 2.5 2zm6 7H7v1h1.5c.83 0 1.5-.67 1.5-1.5v-5C10 2.67 9.33 2 8.5 2H7v1h1.5c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5z" fill={primaryFill} /></svg>;
};

export default SplitVertical12Regular;