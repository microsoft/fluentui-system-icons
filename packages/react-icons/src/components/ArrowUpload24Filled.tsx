import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowUpload24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3.5h13.5a.75.75 0 00.1-1.5H5.25a.75.75 0 00-.1 1.49h.1zM11.88 22H12a1 1 0 001-.88V8.4l3.3 3.3a1 1 0 001.31.08l.1-.09a1 1 0 00.08-1.32l-.08-.1-5-4.99a1 1 0 00-1.32-.08l-.1.08-5 5a1 1 0 001.32 1.5l.1-.09L11 8.41V21a1 1 0 00.88 1z" fill={primaryFill} /></svg>;
};

export default ArrowUpload24Filled;