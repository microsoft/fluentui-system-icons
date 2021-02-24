import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cloud32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.85 8.74A7.64 7.64 0 0116 6c1.7 0 3.68.56 5.26 1.85a7.46 7.46 0 012.7 5.2c1.37.17 2.7.69 3.78 1.51A5.55 5.55 0 0130 19c0 1.75-.58 3.3-1.84 4.4C26.92 24.48 25.15 25 23 25H9c-2.7 0-4.52-.82-5.63-2.1A5.9 5.9 0 012 19c0-2.36 1.93-5.53 6.06-5.95a8.4 8.4 0 011.8-4.3z" fill={primaryFill} /></svg>;
};

export default Cloud32Filled;