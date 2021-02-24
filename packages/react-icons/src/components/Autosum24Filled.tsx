import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Autosum24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.83 4.61A1 1 0 015.75 4h12.5a1 1 0 110 2H8.11l4.95 5.12a1 1 0 01.04 1.34L7.92 18.5h10.33a1 1 0 110 2H5.75a1 1 0 01-.76-1.65l6-7L5.03 5.7a1 1 0 01-.2-1.09z" fill={primaryFill} /></svg>;
};

export default Autosum24Filled;