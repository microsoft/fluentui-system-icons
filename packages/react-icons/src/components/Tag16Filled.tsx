import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Tag16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.54 7.33L7.29 2.6c.38-.37.89-.58 1.42-.59L11.97 2A2 2 0 0114 4.01l-.03 3.38a2 2 0 01-.59 1.4L8.7 13.44c-.78.78-2.06.78-2.84 0l-3.31-3.28a2 2 0 010-2.83zm7.72-1.67c.3.3.8.3 1.1 0 .3-.3.3-.78 0-1.08a.77.77 0 00-1.1 0c-.3.3-.3.78 0 1.08z" fill={primaryFill} /></svg>;
};

export default Tag16Filled;