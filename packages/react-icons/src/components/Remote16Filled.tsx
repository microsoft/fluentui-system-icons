import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Remote16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.8 3.26a.75.75 0 10-1.1-1.02l-4 4.25a.75.75 0 000 1.02l4 4.25a.75.75 0 101.1-1.02L10.28 7l3.52-3.74zm-10.5.98a.75.75 0 10-1.1 1.02L5.72 9 2.2 12.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25z" fill={primaryFill} /></svg>;
};

export default Remote16Filled;