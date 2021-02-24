import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataBarHorizontal24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 18.25c0-1.24-1-2.25-2.25-2.25H5.25a2.25 2.25 0 100 4.5h13.5c1.24 0 2.25-1 2.25-2.25zm-4-6.5c0-1.24-1-2.25-2.25-2.25h-9.5a2.25 2.25 0 100 4.5h9.5C16 14 17 13 17 11.75zm-4-6.5C13 4.01 12 3 10.75 3h-5.5a2.25 2.25 0 000 4.5h5.5C12 7.5 13 6.5 13 5.25z" fill={primaryFill} /></svg>;
};

export default DataBarHorizontal24Filled;