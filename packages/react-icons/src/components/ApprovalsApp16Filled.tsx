import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalsApp16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.31.26a.75.75 0 10-1.12.98l.68.79A6.5 6.5 0 1015 8.5v-.25a.75.75 0 10-1.5 0v.25a5 5 0 11-5.7-4.95l-.61.7a.75.75 0 101.12 1l1.75-2a.75.75 0 000-1l-1.75-2zm3.5 5.99c.27.3.25.78-.06 1.05L9 9.8a.75.75 0 01-1.03-.02L6.72 8.53a.75.75 0 011.06-1.06l.74.74 2.23-2.01a.75.75 0 011.05.05z" fill={primaryFill} /></svg>;
};

export default ApprovalsApp16Filled;