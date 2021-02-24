import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCurveDownRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.61 3.14a.75.75 0 11.78-1.28 7.2 7.2 0 012.98 3.13c.63 1.33.88 2.96.88 5.01v5.44l2.72-2.72a.75.75 0 111.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 011.06-1.06l2.72 2.72V10c0-1.95-.25-3.32-.74-4.37a5.71 5.71 0 00-2.4-2.49z" fill={primaryFill} /></svg>;
};

export default ArrowCurveDownRight20Filled;