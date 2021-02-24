import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.32 12.7a1.5 1.5 0 01-.02 2.12l-22.25 22a1.5 1.5 0 01-2.1 0l-9.25-9a1.5 1.5 0 112.1-2.15l8.2 7.98 21.2-20.97a1.5 1.5 0 012.12.02z" fill={primaryFill} /></svg>;
};

export default Checkmark48Filled;