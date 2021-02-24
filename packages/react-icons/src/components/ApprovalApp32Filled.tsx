import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalApp32Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.63.51a1.5 1.5 0 10-2.26 1.98l1.38 1.57A13 13 0 1029 17v-.5a1.5 1.5 0 10-3 0v.5a10 10 0 11-11.39-9.9L13.37 8.5a1.5 1.5 0 102.26 1.98l3.5-4c.5-.57.5-1.41 0-1.98l-3.5-4zM22.6 12.5a1.5 1.5 0 01-.1 2.12l-5.5 5c-.6.54-1.5.52-2.07-.05l-2.5-2.5a1.5 1.5 0 012.12-2.12l1.49 1.49 4.44-4.04a1.5 1.5 0 012.12.1z" fill={primaryFill} /></svg>;
};

export default ApprovalApp32Filled;