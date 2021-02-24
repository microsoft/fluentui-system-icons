import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleRight28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 17a3 3 0 110-6 3 3 0 010 6z" fill={primaryFill} /><path d="M20 8a6 6 0 010 12H8A6 6 0 018 8h12zm4.5 6A4.5 4.5 0 0020 9.5H8a4.5 4.5 0 100 9h12a4.5 4.5 0 004.5-4.5z" fill={primaryFill} /></svg>;
};

export default ToggleRight28Regular;