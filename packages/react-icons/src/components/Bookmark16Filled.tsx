import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bookmark16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.78 13.92A.5.5 0 013 13.5V4.01c0-1.1.9-2 2-2h6A2 2 0 0113 4v9.5a.5.5 0 01-.78.42L8 11.1l-4.22 2.82z" fill={primaryFill} /></svg>;
};

export default Bookmark16Filled;