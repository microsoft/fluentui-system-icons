import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretDown16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.14 6.57A1 1 0 014.96 5h6.08a1 1 0 01.82 1.57l-2.63 3.79a1.5 1.5 0 01-2.46 0L4.14 6.57zM4.96 6l2.63 3.78c.2.29.62.29.82 0L11.04 6H4.96z" fill={primaryFill} /></svg>;
};

export default CaretDown16Regular;