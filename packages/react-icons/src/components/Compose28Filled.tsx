import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Compose28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25.7 3.7a1 1 0 00-1.4-1.4l-13 13L11 17l1.7-.3 13-13z" fill={primaryFill} /><path d="M6.5 3A3.5 3.5 0 003 6.5v15A3.5 3.5 0 006.5 25h15a3.5 3.5 0 003.5-3.5v-10a1 1 0 10-2 0v10c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 015 21.5v-15C5 5.67 5.67 5 6.5 5h10a1 1 0 100-2h-10z" fill={primaryFill} /></svg>;
};

export default Compose28Filled;