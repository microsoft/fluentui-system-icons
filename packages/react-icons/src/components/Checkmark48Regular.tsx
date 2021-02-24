import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark48Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M40.14 12.87c.48.5.48 1.28-.01 1.77l-22.25 22c-.49.48-1.26.48-1.75 0l-9.25-9a1.25 1.25 0 111.74-1.79L17 34l21.38-21.14c.5-.48 1.28-.48 1.77.01z" fill={primaryFill} /></svg>;
};

export default Checkmark48Regular;