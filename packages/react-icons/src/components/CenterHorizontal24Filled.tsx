import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CenterHorizontal24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 3c.41 0 .75.34.75.75v16.5a.75.75 0 01-1.5 0V3.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M20.25 3c.41 0 .75.34.75.75v16.5a.75.75 0 01-1.5 0V3.75c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M9.5 5C8.67 5 8 5.67 8 6.5v11c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /></svg>;
};

export default CenterHorizontal24Filled;