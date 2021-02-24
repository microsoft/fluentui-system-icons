import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Call32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.51 14.05l2.15-1.97a4 4 0 001.04-4.35l-.92-2.45a3.83 3.83 0 00-4.7-2.32C7.63 4 5 7.2 5.81 10.99a31.8 31.8 0 009.55 16.48c2.86 2.6 6.96 1.96 9.6-.5a3.8 3.8 0 00.34-5.2l-1.68-2.04a4 4 0 00-4.29-1.27l-2.77.87a13.3 13.3 0 01-1.88-2.44 12.53 12.53 0 01-1.18-2.84z" fill={primaryFill} /></svg>;
};

export default Call32Filled;