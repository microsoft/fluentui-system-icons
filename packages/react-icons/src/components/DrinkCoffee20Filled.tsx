import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DrinkCoffee20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.17 3.97C2.52 3.97 2 4.49 2 5.14V10a6 6 0 0011.92 1H15a3 3 0 100-6h-1a1.17 1.17 0 00-1.17-1.03H3.17zM14 6h1a2 2 0 110 4h-1V6z" fill={primaryFill} /></svg>;
};

export default DrinkCoffee20Filled;