import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DocumentLandscape20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10h-4.5A1.5 1.5 0 0112 8.5V4H3.5C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V10z" fill={primaryFill} /><path d="M17.75 9H13.5a.5.5 0 01-.5-.5V4.25L17.75 9z" fill={primaryFill} /></svg>;
};

export default DocumentLandscape20Filled;