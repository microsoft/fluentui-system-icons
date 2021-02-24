import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataTreemap24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3H9v18H6.25A3.25 3.25 0 013 17.75V6.25z" fill={primaryFill} /><path d="M10.5 21h7.25c1.8 0 3.25-1.46 3.25-3.25V15.5H10.5V21z" fill={primaryFill} /><path d="M21 14V6.25C21 4.45 19.54 3 17.75 3H10.5v11H21z" fill={primaryFill} /></svg>;
};

export default DataTreemap24Filled;