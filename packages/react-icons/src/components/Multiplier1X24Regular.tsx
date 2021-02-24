import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 7.75a.75.75 0 00-1.39-.4v.01a3.07 3.07 0 01-.15.22 6.88 6.88 0 01-2.1 2.03.75.75 0 10.78 1.28c.52-.31.98-.69 1.36-1.06v6.42a.75.75 0 001.5 0v-8.5zm3.28 4.47a.75.75 0 00-1.06 1.06l1.22 1.22-1.22 1.22a.75.75 0 101.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 001.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 10-1.06-1.06l-1.22 1.22-1.22-1.22z" fill={primaryFill} /></svg>;
};

export default Multiplier1X24Regular;