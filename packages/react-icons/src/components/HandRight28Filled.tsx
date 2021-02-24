import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const HandRight28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 3v9.25a.75.75 0 01-1.5 0V4.5a1 1 0 10-2 0v8.25a.75.75 0 01-1.5 0V7a1 1 0 10-2 0v10.25c0 2.52.98 5.3 1.64 6.89A3.06 3.06 0 0010.5 26h3.6c1.23 0 2.36-.7 2.9-1.81l.7-1.4c.3-.6.64-1.17 1.03-1.7l2.8-3.78 2.62-1.68a.75.75 0 00.35-.63c0-.49-.21-.89-.55-1.17-.3-.26-.7-.4-1.06-.47a5.58 5.58 0 00-2.42.16 8.1 8.1 0 00-1.97.84V4.5a1 1 0 10-2 0v7.75a.75.75 0 01-1.5 0V3a1 1 0 10-2 0z" fill={primaryFill} /></svg>;
};

export default HandRight28Filled;