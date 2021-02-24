import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataLine24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 6a3 3 0 112.52 2.96l-2.03 3.36a3 3 0 01-4.75 3.65L8 17.84V18a3 3 0 11-.47-1.6l3.54-1.77A3.01 3.01 0 0114 11c.48 0 .94.11 1.34.32l1.8-2.97A3 3 0 0116 6z" fill={primaryFill} /></svg>;
};

export default DataLine24Filled;