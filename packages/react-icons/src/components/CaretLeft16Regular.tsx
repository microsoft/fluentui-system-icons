import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretLeft16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.43 11.86a1 1 0 001.57-.82V4.96a1 1 0 00-1.57-.82L5.64 6.77a1.5 1.5 0 000 2.46l3.79 2.63zm.57-.82L6.22 8.41a.5.5 0 010-.82L10 4.96v6.08z" fill={primaryFill} /></svg>;
};

export default CaretLeft16Regular;