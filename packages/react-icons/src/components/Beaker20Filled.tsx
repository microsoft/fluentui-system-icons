import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Beaker20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.25 4v4.75c0 .4-.1.81-.3 1.18l-.84 1.57h7.78l-.84-1.57a2.5 2.5 0 01-.3-1.18V4h.75a.5.5 0 000-1h-7a.5.5 0 000 1h.75z" fill={primaryFill} /><path d="M14.42 12.5H5.58l-1.23 2.3A1.5 1.5 0 005.67 17h8.66a1.5 1.5 0 001.32-2.2l-1.23-2.3z" fill={primaryFill} /></svg>;
};

export default Beaker20Filled;