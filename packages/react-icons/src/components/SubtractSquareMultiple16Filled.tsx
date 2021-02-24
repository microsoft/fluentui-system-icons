import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SubtractSquareMultiple16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V4a2 2 0 00-2-2H4zm.5 4.5h5a.5.5 0 010 1h-5a.5.5 0 110-1zm8.5 4a2.5 2.5 0 01-2.5 2.5H3.27c.34.6.99 1 1.73 1h5.5a3.5 3.5 0 003.5-3.5V5a2 2 0 00-1-1.73v7.23z" fill={primaryFill} /></svg>;
};

export default SubtractSquareMultiple16Filled;