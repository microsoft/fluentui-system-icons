import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Crop24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 17a.75.75 0 01.1 1.5H18.5v2.75a.75.75 0 01-1.5.1V18.5H8.75a3.25 3.25 0 01-3.24-3.07l-.01-.18V7H2.75a.75.75 0 01-.1-1.5H5.5V2.75a.75.75 0 011.5-.1v12.6c0 .92.7 1.67 1.6 1.74l.15.01h12.5zM8 5.5h7.25a3.25 3.25 0 013.24 3.07l.01.18V16H17V8.75c0-.92-.7-1.67-1.6-1.74L15.24 7H8V5.5z" fill={primaryFill} /></svg>;
};

export default Crop24Regular;