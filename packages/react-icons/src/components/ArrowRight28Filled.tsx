import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRight28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.7 4.29a1 1 0 10-1.4 1.42L21.68 13H4a1 1 0 100 2h17.67l-7.37 7.29a1 1 0 001.4 1.42l8.93-8.82c.5-.5.5-1.3 0-1.78L15.7 4.29z" fill={primaryFill} /></svg>;
};

export default ArrowRight28Filled;