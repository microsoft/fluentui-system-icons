import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 15.5a1.5 1.5 0 00-2.78-.77l-.02.01a8.11 8.11 0 01-.27.42c-.2.29-.5.7-.9 1.17-.8.94-1.93 2.06-3.3 2.88a1.5 1.5 0 101.54 2.58A15.4 15.4 0 0017 19.67V32.5a1.5 1.5 0 003 0v-17zm6.56 8.94a1.5 1.5 0 00-2.12 2.12L26.88 29l-2.44 2.44a1.5 1.5 0 002.12 2.12L29 31.12l2.44 2.44a1.5 1.5 0 002.12-2.12L31.12 29l2.44-2.44a1.5 1.5 0 00-2.12-2.12L29 26.88l-2.44-2.44z" fill={primaryFill} /></svg>;
};

export default Multiplier1X48Filled;