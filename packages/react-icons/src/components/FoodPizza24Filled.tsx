import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FoodPizza24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.66a2.6 2.6 0 012.82-2.65 20.78 20.78 0 0113.45 6.83 2.6 2.6 0 01-.48 3.85l-.43.3-.36-.54A17.55 17.55 0 005.74 5.16H5v-.5zm13.77 8.65l.38.56-3.95 2.87-.2.15v2.1a1 1 0 01-2 0v-.06a.5.5 0 00-1 .06v1.5a1 1 0 01-2 .1l-1.43 1.04A2.25 2.25 0 015 19.81V6.67h.75c5.36 0 10.1 2.61 13.02 6.64zM9 10.99a1 1 0 100-2 1 1 0 000 2zm4 3a1 1 0 100-2 1 1 0 000 2zm-4 3a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default FoodPizza24Filled;