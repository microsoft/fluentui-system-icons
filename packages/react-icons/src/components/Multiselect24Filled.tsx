import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiselect24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.65 15.24a1 1 0 01.19 1.31l-.08.1-3 3.5a1 1 0 01-1.26.22l-.1-.07-2-1.5a1 1 0 011.1-1.67l.1.07 1.25.94 2.4-2.8a1 1 0 011.4-.1zM21 17a1 1 0 01.12 2H11a1 1 0 01-.12-2H21zm-.01-6a1 1 0 01.11 2H11a1 1 0 01-.12-2H21zM8.65 3.24a1 1 0 01.19 1.31l-.08.1-3 3.5a1 1 0 01-1.26.22l-.1-.07-2-1.5a1 1 0 011.1-1.67l.1.07 1.25.94 2.4-2.8a1 1 0 011.4-.1zM21 5a1 1 0 01.12 2H11a1 1 0 01-.12-2H21z" fill={primaryFill} /></svg>;
};

export default Multiselect24Filled;