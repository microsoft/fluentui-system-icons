import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Compose28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.78 3.28a.75.75 0 10-1.06-1.06L11.47 15.47 11 17l1.53-.47L25.78 3.28z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v15.5C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25V11.2a.75.75 0 00-1.5 0v10.55c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75H16.8a.75.75 0 100-1.5H6.25z" fill={primaryFill} /></svg>;
};

export default Compose28Regular;