import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FlagOff20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21V17.5a.5.5 0 001 0V13h7.8l4.85 4.85a.5.5 0 00.7-.7L3.77 3.05l-.92-.9zM15.5 13h-.38l-10-10H15.5c.4 0 .64.45.42.78L13.1 8l2.82 4.22a.5.5 0 01-.42.78z" fill={primaryFill} /></svg>;
};

export default FlagOff20Filled;