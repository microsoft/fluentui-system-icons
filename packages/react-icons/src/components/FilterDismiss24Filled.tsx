import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const FilterDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7L18.21 7.5l1.64-1.65a.5.5 0 00-.7-.7L17.5 6.79l-1.65-1.64zM8 11h4.02c.52.8 1.2 1.49 2.01 2H8a1 1 0 01-.12-2H8zM5 6h6.17a6.52 6.52 0 00-.15 2H5a1 1 0 01-.12-2H5zm4.88 10H14a1 1 0 01.12 2H10a1 1 0 01-.12-2z" fill={primaryFill} /></svg>;
};

export default FilterDismiss24Filled;