import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SubtractSquareMultiple16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.5a.5.5 0 000 1h5a.5.5 0 100-1h-5zM2 4c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H4zm9 7.5a2.5 2.5 0 01-2.5 2.5H3.27c.34.6.99 1 1.73 1h5.5a3.5 3.5 0 003.5-3.5V5a2 2 0 00-1-1.73v7.23z" fill={primaryFill} /></svg>;
};

export default SubtractSquareMultiple16Regular;