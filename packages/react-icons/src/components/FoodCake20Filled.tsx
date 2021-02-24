import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodCake20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2c-.77 0-1.28.53-1.57 1.02-.3.5-.45 1.07-.47 1.44-.04.74.07 1.39.44 1.86.38.49.96.67 1.6.67.64 0 1.22-.2 1.6-.7.37-.47.49-1.11.44-1.83a3.56 3.56 0 00-.47-1.43C11.28 2.55 10.77 2 10 2z" fill={primaryFill} /><path d="M3.01 9.79l3.2 2.94a1 1 0 001.43-.07l.86-.98a2 2 0 013 0l.86.98a1 1 0 001.43.07l3.2-2.94A2 2 0 0015 8H5a2 2 0 00-1.99 1.79z" fill={primaryFill} /><path d="M17 11.14l-2.54 2.33a2 2 0 01-2.85-.15l-.86-.97a1 1 0 00-1.5 0l-.86.97a2 2 0 01-2.85.15L3 11.14V16h-.5a.5.5 0 000 1h15a.5.5 0 000-1H17v-4.86z" fill={primaryFill} /></svg>;
};

export default FoodCake20Filled;