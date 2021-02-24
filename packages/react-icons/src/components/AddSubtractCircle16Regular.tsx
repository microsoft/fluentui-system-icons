import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AddSubtractCircle16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 10.5c0-.28.22-.5.5-.5H12a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5zm-3-6a.5.5 0 00-1 0v1H4a.5.5 0 000 1h1v.8a.5.5 0 001 0v-.8h1a.5.5 0 000-1H6v-1zM8 15A7 7 0 108 1a7 7 0 000 14zm0-1a5.98 5.98 0 01-3.87-1.42l8.45-8.45A6 6 0 018 14zm-4.58-2.13a6 6 0 018.46-8.46l-8.46 8.46z" fill={primaryFill} /></svg>;
};

export default AddSubtractCircle16Regular;