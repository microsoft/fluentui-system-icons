import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextboxAlignCenter24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zM7 10h-.14c-.48.06-.86.37-.86.75 0 .41.45.75 1 .75h10.14c.48-.06.86-.37.86-.75 0-.41-.45-.75-1-.75H7zm8.33 3H8.57c-.32.06-.57.37-.57.75 0 .41.3.75.67.75h6.76c.32-.06.57-.37.57-.75 0-.41-.3-.75-.67-.75z" fill={primaryFill} /></svg>;
};

export default TextboxAlignCenter24Filled;