import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Link28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8a1 1 0 01.12 2H8a4 4 0 00-.2 8H11a1 1 0 01.12 2H8a6 6 0 01-.22-12H11zm9 0a6 6 0 01.22 12H17a1 1 0 01-.12-2H20a4 4 0 00.2-8H17a1 1 0 01-.12-2H20zM8 13h12a1 1 0 01.12 2H8a1 1 0 01-.12-2H20 8z" fill={primaryFill} /></svg>;
};

export default Link28Filled;