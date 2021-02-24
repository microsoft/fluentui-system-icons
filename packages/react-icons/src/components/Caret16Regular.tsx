import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Caret16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.3 4.25a1 1 0 011.7.7v5.55c0 .83-.67 1.5-1.5 1.5H4.96a1 1 0 01-.71-1.7l6.04-6.05zm.7.7L4.96 11h5.54a.5.5 0 00.5-.5V4.96z" fill={primaryFill} /></svg>;
};

export default Caret16Regular;