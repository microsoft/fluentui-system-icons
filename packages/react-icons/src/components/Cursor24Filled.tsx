import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cursor24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.92 2.3A1.5 1.5 0 005.5 3.48V20.5a1.5 1.5 0 002.68.93l4.19-5.3c.31-.4.79-.62 1.3-.62h6.84a1.5 1.5 0 00.93-2.69L7.92 2.3z" fill={primaryFill} /></svg>;
};

export default Cursor24Filled;