import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VideoPerson12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M1 3.5C1 2.67 1.67 2 2.5 2h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 011 8.5v-5zM8 9h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v5c0 .28.22.5.5.5H4v-.5a1 1 0 011-1h2a1 1 0 011 1V9z" fill={primaryFill} /></svg>;
};

export default VideoPerson12Filled;