import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleUpLeft24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm3.25-12.5h-4.74l5.27 5.22a.75.75 0 11-1.06 1.06L9.5 10.61v4.64a.75.75 0 01-1.5 0v-6.5c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5z" fill={primaryFill} /></svg>;
};

export default ArrowCircleUpLeft24Filled;