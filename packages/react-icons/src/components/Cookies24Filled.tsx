import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cookies24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2c.71 0 1.42.07 2.1.22.59.13.8.84.38 1.27a2.5 2.5 0 001.2 4.2c.38.08.62.43.58.8l-.01.26a2.5 2.5 0 004.37 1.66.75.75 0 011.31.4A10 10 0 1112 2zm3 14a1 1 0 100 2 1 1 0 000-2zm-7-1a1 1 0 100 2 1 1 0 000-2zm4-4a1 1 0 100 2 1 1 0 000-2zM7 8a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default Cookies24Filled;