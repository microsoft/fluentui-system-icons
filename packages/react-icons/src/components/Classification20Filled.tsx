import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Classification20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.56 16.48a1 1 0 01-1.41 0l-5.66-5.66a1 1 0 010-1.42L4.91 8l-.09-.1a1 1 0 01.09-1.31L6.68 4.8a2.5 2.5 0 013.53 0l1.31 1.31 1.44-2.42a2.44 2.44 0 013.83-.48 2.42 2.42 0 01-.5 3.82l-2.43 1.41 1.3 1.3a2.5 2.5 0 010 3.54l-1.77 1.77a1 1 0 01-1.41 0l-1.42 1.42zM5.61 8.7L4.2 10.1l5.66 5.66 1.41-1.42L5.61 8.7zm8.21-4.48l-1.57 2.63.87.87 2.67-1.55a1.43 1.43 0 00.01-2.46 1.44 1.44 0 00-1.98.5z" fill={primaryFill} /></svg>;
};

export default Classification20Filled;