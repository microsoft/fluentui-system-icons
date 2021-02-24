import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.3 19.72a1 1 0 001.4-1.43L6.33 13H20a1 1 0 100-2H6.34l5.36-5.28a1 1 0 00-1.4-1.43l-6.93 6.82c-.5.5-.5 1.3 0 1.78l6.93 6.83z" fill={primaryFill} /></svg>;
};

export default ArrowLeft24Filled;