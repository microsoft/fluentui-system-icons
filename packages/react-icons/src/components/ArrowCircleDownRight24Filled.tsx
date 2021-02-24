import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleDownRight24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm2.5-13.25a.75.75 0 011.5 0v6.5c0 .41-.34.75-.75.75h-6.5a.75.75 0 010-1.5h4.74L8.22 9.28a.75.75 0 011.06-1.06l5.22 5.17V8.75z" fill={primaryFill} /></svg>;
};

export default ArrowCircleDownRight24Filled;