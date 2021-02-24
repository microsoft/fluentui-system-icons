import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NumberSymbol24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.99 2.89a.75.75 0 10-1.48-.28L8.5 8H3.75a.75.75 0 100 1.5h4.46l-.95 5H2.75a.75.75 0 000 1.5h4.23l-.97 5.11a.75.75 0 101.48.28L8.5 16h5.47l-.97 5.12a.75.75 0 101.48.28L15.5 16h4.74a.75.75 0 100-1.5h-4.46l.95-5h4.51a.75.75 0 100-1.5h-4.23L18 2.9a.75.75 0 00-1.48-.28L15.5 8h-5.47L11 2.9zm-1.25 6.6h5.47l-.94 5H8.79l.95-5z" fill={primaryFill} /></svg>;
};

export default NumberSymbol24Regular;