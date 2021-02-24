import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 5.5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9a.5.5 0 00.5-.5zm-1-3V4H9V2.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V4H2V2.5C2 1.67 2.67 1 3.5 1h5c.83 0 1.5.67 1.5 1.5zm-7 6V7H2v1.5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V7H9v1.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal12Regular;