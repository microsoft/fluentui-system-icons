import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 15.25a1.25 1.25 0 00-2.32-.64l-.02.03a10.19 10.19 0 01-.34.51c-.23.35-.58.82-1 1.33a9.67 9.67 0 01-3.09 2.63 1.25 1.25 0 001.04 2.28A10.77 10.77 0 0017 18.92v13.83a1.25 1.25 0 002.5 0v-17.5zm6.63 9.12a1.25 1.25 0 10-1.76 1.76L27.23 29l-2.86 2.87a1.25 1.25 0 001.76 1.76L29 30.77l2.87 2.86a1.25 1.25 0 001.76-1.76L30.77 29l2.86-2.87a1.25 1.25 0 00-1.76-1.76L29 27.23l-2.87-2.86z" fill={primaryFill} /></svg>;
};

export default Multiplier1X48Regular;