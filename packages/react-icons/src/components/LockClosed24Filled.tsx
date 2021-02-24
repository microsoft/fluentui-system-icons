import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LockClosed24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a4 4 0 014 4v2h2.5c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 014 20.5v-11C4 8.67 4.67 8 5.5 8H8V6a4 4 0 014-4zm0 11.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 4a2 2 0 00-2 2v2h4V6a2 2 0 00-2-2z" fill={primaryFill} /></svg>;
};

export default LockClosed24Filled;