import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Document28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2v8c0 1.1.9 2 2 2h8v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2h8z" fill={primaryFill} /><path d="M15.5 2.5V10c0 .28.22.5.5.5h7.5l-8-8z" fill={primaryFill} /></svg>;
};

export default Document28Filled;