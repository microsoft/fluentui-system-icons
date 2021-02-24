import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Checkmark12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 6.15a.5.5 0 10-.7.7l2.5 2.5c.2.21.55.2.73-.03l5-6a.5.5 0 00-.76-.64L4.97 8.26 2.85 6.15z" fill={primaryFill} /></svg>;
};

export default Checkmark12Regular;