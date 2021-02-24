import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Grid28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 15c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C4.01 25 3 24 3 22.75v-5.5C3 16.01 4 15 5.25 15h5.5zm12 0c1.24 0 2.25 1 2.25 2.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C16.01 25 15 24 15 22.75v-5.5c0-1.24 1-2.25 2.25-2.25h5.5zm-12-12C11.99 3 13 4 13 5.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C4.01 13 3 12 3 10.75v-5.5C3 4.01 4 3 5.25 3h5.5zm12 0C23.99 3 25 4 25 5.25v5.5c0 1.24-1 2.25-2.25 2.25h-5.5C16.01 13 15 12 15 10.75v-5.5C15 4.01 16 3 17.25 3h5.5z" fill={primaryFill} /></svg>;
};

export default Grid28Filled;