import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 2a1 1 0 00-1 1v1h-.5C2.67 4 2 4.67 2 5.5v3c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-3C10 4.67 9.33 4 8.5 4H8V3a1 1 0 00-1-1H5zm2 2H5V3h2v1z" fill={primaryFill} /></svg>;
};

export default Briefcase12Filled;