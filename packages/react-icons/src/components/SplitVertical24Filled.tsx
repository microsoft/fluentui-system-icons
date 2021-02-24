import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitVertical24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2.75a.75.75 0 00-1.5 0v18.5a.75.75 0 001.5 0V2.75zM2 6.25C2 5.01 3 4 4.25 4H10v16H4.25C3.01 20 2 19 2 17.75V6.25zM19.25 20H13.5V4h5.75c1.24 0 2.25 1 2.25 2.25v11.5c0 1.24-1 2.25-2.25 2.25z" fill={primaryFill} /></svg>;
};

export default SplitVertical24Filled;