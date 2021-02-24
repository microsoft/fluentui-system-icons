import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Branch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5a3.5 3.5 0 114.49 3.36 5.5 5.5 0 005.26 3.89h.33a3.5 3.5 0 110 1.5h-.33a6.99 6.99 0 01-5.5-2.67v3.5a3.5 3.5 0 11-1.5 0V8.92A3.5 3.5 0 014 5.5z" fill={primaryFill} /></svg>;
};

export default Branch24Filled;