import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Highlight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 2C4.01 2 3 3 3 4.25v3C3 8.49 4 9.5 5.25 9.5h13.5c1.24 0 2.25-1 2.25-2.25v-3C21 3.01 20 2 18.75 2H5.25z" fill={primaryFill} /><path d="M5 11.75V11h14v.75c0 1.24-1 2.25-2.25 2.25h-9.5C6.01 14 5 13 5 11.75z" fill={primaryFill} /><path d="M7.5 15.5h9v1.29c0 .81-.44 1.56-1.14 1.96l-.15.08-6.64 3.1a.75.75 0 01-1.06-.58V15.5z" fill={primaryFill} /></svg>;
};

export default Highlight24Filled;