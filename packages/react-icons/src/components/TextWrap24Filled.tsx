import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextWrap24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5a1 1 0 000 2h18a1 1 0 100-2H3z" fill={primaryFill} /><path d="M3 11a1 1 0 100 2h16.25a2 2 0 110 4h-3.84l.3-.3a1 1 0 00-1.42-1.4l-2 2a1 1 0 000 1.4l2 2a1 1 0 001.42-1.4l-.3-.3h3.84a4 4 0 000-8H3z" fill={primaryFill} /><path d="M2 18a1 1 0 011-1h6a1 1 0 110 2H3a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
};

export default TextWrap24Filled;