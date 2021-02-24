import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cloud48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 12.01c6.34 0 9.93 4.2 10.46 9.26h.16a7.37 7.37 0 110 14.73H13.39a7.37 7.37 0 110-14.73h.16c.52-5.1 4.11-9.26 10.45-9.26z" fill={primaryFill} /></svg>;
};

export default Cloud48Filled;