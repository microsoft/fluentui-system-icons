import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EyeShow24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 9a4 4 0 110 8 4 4 0 010-8zm0 1.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-5a10 10 0 019.7 7.56.75.75 0 11-1.45.37 8.5 8.5 0 00-16.5 0 .75.75 0 01-1.45-.36A10 10 0 0112 5.5z" fill={primaryFill} /></svg>;
};

export default EyeShow24Regular;