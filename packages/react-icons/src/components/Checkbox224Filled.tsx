import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkbox224Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 2a3 3 0 013 3v8.54a3.8 3.8 0 00-3.3 1.2 1.75 1.75 0 001.66 2.88A4.82 4.82 0 0016.44 20H5a3 3 0 01-3-3V5a3 3 0 013-3h12zm-1.53 4.97L9 13.44l-2.47-2.47a.75.75 0 00-1.06 1.06l3 3c.3.3.77.3 1.06 0l7-7a.75.75 0 00-1.06-1.06zm3.09 9.44c.27-.3.76-.47 1.13-.4.17.04.3.12.38.22.09.11.18.31.18.68 0 .55-.35.83-1.19 1.44-.74.53-1.81 1.32-1.81 2.9 0 .41.34.75.75.75h3a.75.75 0 000-1.5h-2.06a3.45 3.45 0 011.13-1.03c.67-.48 1.68-1.2 1.68-2.56 0-.63-.17-1.18-.5-1.6a2.1 2.1 0 00-1.27-.76 2.8 2.8 0 00-2.54.86.75.75 0 001.12 1z" fill={primaryFill} /></svg>;
};

export default Checkbox224Filled;