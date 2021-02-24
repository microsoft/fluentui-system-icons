import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Filter24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 16h4a1 1 0 01.12 2H10a1 1 0 01-.12-2H14h-4zm-2-5h8a1 1 0 01.12 2H8a1 1 0 01-.12-2H16 8zM5 6h14a1 1 0 01.12 2H5a1 1 0 01-.12-2H19 5z" fill={primaryFill} /></svg>;
};

export default Filter24Filled;