import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowCircleUpLeft24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 9.5h4.75a.75.75 0 000-1.5h-6.5a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0v-4.64l5.22 5.17a.75.75 0 001.06-1.06L10.5 9.5z" fill={primaryFill} /><path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0zm-10 8.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" fill={primaryFill} /></svg>;
};

export default ArrowCircleUpLeft24Regular;