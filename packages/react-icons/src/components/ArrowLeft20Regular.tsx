import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowLeft20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.16 16.37a.5.5 0 10.67-.74L3.67 10H17.5a.5.5 0 000-1H3.67l6.16-5.63a.5.5 0 00-.67-.74L2.24 8.94a.75.75 0 000 1.11l6.92 6.32z" fill={primaryFill} /></svg>;
};

export default ArrowLeft20Regular;