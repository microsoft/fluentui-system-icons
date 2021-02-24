import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Cast24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4C3.01 4 2 5 2 6.25v11.5C2 18.99 3 20 4.25 20h15.5c1.24 0 2.25-1 2.25-2.25V6.25C22 5.01 21 4 19.75 4H4.25zm1.5 5c4 0 7.25 3.24 7.25 7.25a.75.75 0 11-1.5 0 5.75 5.75 0 00-5.75-5.76.75.75 0 010-1.5zM5 12.74c0-.41.33-.75.75-.75 2.34 0 4.24 1.9 4.24 4.25a.75.75 0 01-1.5 0 2.75 2.75 0 00-2.74-2.75.75.75 0 01-.75-.75zM7 16a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
};

export default Cast24Filled;