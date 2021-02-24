import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.84 2.63a.5.5 0 00-.68.74L16.33 9H2.5a.5.5 0 000 1h13.83l-6.17 5.63a.5.5 0 00.68.74l6.91-6.32a.75.75 0 000-1.1l-6.91-6.32z" fill={primaryFill} /></svg>;
};

export default ArrowRight20Regular;