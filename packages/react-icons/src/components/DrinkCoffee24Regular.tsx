import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrinkCoffee24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.94 5C2.87 5 2 5.87 2 6.94V12a8 8 0 0015.91 1.2h.74a3.35 3.35 0 000-6.7h-.7c-.2-.86-.97-1.5-1.9-1.5H3.96zM3.5 6.94c0-.24.2-.44.44-.44h12.12c.24 0 .44.2.44.44V12a6.5 6.5 0 11-13 0V6.94zM18 8h.65a1.85 1.85 0 110 3.7H18V8z" fill={primaryFill} /></svg>;
};

export default DrinkCoffee24Regular;