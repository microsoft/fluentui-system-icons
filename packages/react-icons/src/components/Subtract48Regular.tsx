import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Subtract48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 23.25c0-.69.56-1.25 1.25-1.25h33.5a1.25 1.25 0 110 2.5H7.25c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
};

export default Subtract48Regular;