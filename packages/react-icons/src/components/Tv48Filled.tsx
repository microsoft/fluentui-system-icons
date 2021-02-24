import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tv48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v18.5A4.75 4.75 0 0139.25 36H8.75A4.75 4.75 0 014 31.25v-18.5z" fill={primaryFill} /><path d="M11.25 39.5a1.25 1.25 0 100 2.5h25.5a1.25 1.25 0 100-2.5h-25.5z" fill={primaryFill} /></svg>;
};

export default Tv48Filled;