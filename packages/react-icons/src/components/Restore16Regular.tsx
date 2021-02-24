import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Restore16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.08 4c.21-.58.77-1 1.42-1H10a3 3 0 013 3v3.5c0 .65-.42 1.2-1 1.41V6a2 2 0 00-2-2H5.08z" fill={primaryFill} /><path d="M4.5 5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 013 11.5v-5C3 5.67 3.67 5 4.5 5zm0 1a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z" fill={primaryFill} /></svg>;
};

export default Restore16Regular;