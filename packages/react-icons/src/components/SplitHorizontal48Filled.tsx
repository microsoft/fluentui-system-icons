import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const SplitHorizontal48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M42.75 25.5a1.25 1.25 0 100-2.5H5.25a1.25 1.25 0 100 2.5h37.5zM8 39.75V27.5h32v12.25C40 42.1 38.1 44 35.75 44h-23.5A4.25 4.25 0 018 39.75zM40 21V8.25C40 5.9 38.1 4 35.75 4h-23.5A4.25 4.25 0 008 8.25V21h32z" fill={primaryFill} /></svg>;
};

export default SplitHorizontal48Filled;