import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowRotateClockwise24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a9 9 0 014.13 17H18a1 1 0 01.12 2H14a1 1 0 01-1-.88V17a1 1 0 012-.12V18.33A7 7 0 105 12a1 1 0 11-2 0 9 9 0 019-9zm0 6a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
};

export default ArrowRotateClockwise24Filled;