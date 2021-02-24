import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Backpack12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.06 3.5H4v-1C4 1.67 4.67 1 5.5 1h1C7.33 1 8 1.67 8 2.5v1h-.06A4 4 0 0110 7v2.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 012 9.5V7a4 4 0 012.06-3.5zm.94-1v.63a4 4 0 012 0V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5zm0 3c0 .28.22.5.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5zM4.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3z" fill={primaryFill} /></svg>;
};

export default Backpack12Filled;