import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ApprovalApp32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7.3a1 1 0 10-1.4 1.4L15.6 4A13 13 0 1029 17v-.08a.94.94 0 00-.96-.92h-.08a.98.98 0 00-.96 1A11 11 0 1115.58 6l-2.29 2.3a1 1 0 001.42 1.4l4-4a1 1 0 000-1.4l-4-4zm8 12a1 1 0 010 1.4l-6 6a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.4l2.3 2.29 5.3-5.3a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
};

export default ApprovalApp32Regular;