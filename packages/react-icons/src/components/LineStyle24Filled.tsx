import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LineStyle24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6a1 1 0 011-1h3a1 1 0 010 2H3a1 1 0 01-1-1zm0 12.5c0-.83.67-1.5 1.5-1.5h17a1.5 1.5 0 010 3h-17A1.5 1.5 0 012 18.5zM10.75 5a1 1 0 100 2h2.5a1 1 0 100-2h-2.5zM17 6a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zM3 11a1 1 0 100 2h18a1 1 0 100-2H3z" fill={primaryFill} /></svg>;
};

export default LineStyle24Filled;