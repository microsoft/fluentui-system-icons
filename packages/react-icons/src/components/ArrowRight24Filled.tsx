import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.7 4.28a1 1 0 10-1.4 1.43L17.67 11H4a1 1 0 100 2h13.66l-5.36 5.28a1 1 0 001.4 1.43l6.93-6.82c.5-.5.5-1.3 0-1.78L13.7 4.28z" fill={primaryFill} /></svg>;
};

export default ArrowRight24Filled;