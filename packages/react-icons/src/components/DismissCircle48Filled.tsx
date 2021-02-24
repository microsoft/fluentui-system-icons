import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DismissCircle48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a20 20 0 110 40 20 20 0 010-40zm-6.12 12.12l-.1-.1a1.25 1.25 0 00-1.56 0l-.1.1-.1.1c-.36.45-.36 1.1 0 1.56l.1.1L22.23 24l-6.11 6.12-.1.1c-.36.45-.36 1.1 0 1.56l.1.1.1.1c.45.36 1.1.36 1.56 0l.1-.1L24 25.77l6.12 6.11.1.1c.45.36 1.1.36 1.56 0l.1-.1.1-.1c.36-.45.36-1.1 0-1.56l-.1-.1L25.77 24l6.11-6.12.1-.1c.36-.45.36-1.1 0-1.56l-.1-.1-.1-.1a1.25 1.25 0 00-1.56 0l-.1.1L24 22.23l-6.12-6.11-.1-.1.1.1z" fill={primaryFill} /></svg>;
};

export default DismissCircle48Filled;