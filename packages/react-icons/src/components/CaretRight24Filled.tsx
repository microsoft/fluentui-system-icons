import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CaretRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 17.9a1.25 1.25 0 002.07.94l6.31-5.52c.8-.7.8-1.94 0-2.64l-6.3-5.52C10.25 4.46 9 5.03 9 6.1v11.8z" fill={primaryFill} /></svg>;
};

export default CaretRight24Filled;