import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Mail28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 10.12l10.65 5.55c.22.1.48.1.7 0L25 10.13v9.62a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 19.75v-9.63zM6.25 5h15.5a3.25 3.25 0 013.24 3.07l.01.18v.18l-11 5.72L3 8.43v-.18a3.25 3.25 0 013.07-3.24L6.25 5h15.5-15.5z" fill={primaryFill} /></svg>;
};

export default Mail28Filled;