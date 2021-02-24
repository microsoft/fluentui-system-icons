import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Payment28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.75A2.75 2.75 0 014.75 5h18.5A2.75 2.75 0 0126 7.75V10H2V7.75z" fill={primaryFill} /><path d="M2 11.5h24v7.75A2.75 2.75 0 0123.25 22H4.75A2.75 2.75 0 012 19.25V11.5zm16.5 4.9a.9.9 0 000 1.8h3a.9.9 0 000-1.8h-3z" fill={primaryFill} /></svg>;
};

export default Payment28Filled;