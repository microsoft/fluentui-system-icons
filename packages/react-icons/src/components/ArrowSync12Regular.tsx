import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowSync12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.65 2.85a.5.5 0 010-.7L5.9.9a.5.5 0 01.7.7l-.4.4a4 4 0 012.9 6.53.5.5 0 01-.78-.63A3 3 0 006.21 3l.4.39a.5.5 0 11-.71.7L4.65 2.85z" fill={primaryFill} /><path d="M3.8 3.23c.2.19.21.5.02.7A3 3 0 005.78 9L5.4 8.6a.5.5 0 11.7-.7l1.25 1.25c.2.2.2.5 0 .7L6.1 11.1a.5.5 0 01-.7-.7l.4-.4a4 4 0 01-2.7-6.75c.19-.2.5-.21.7-.02z" fill={primaryFill} /></svg>;
};

export default ArrowSync12Regular;