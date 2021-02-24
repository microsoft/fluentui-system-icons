import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const UsbPort20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h.08C14.14 6 15 6.85 15 7.91v5.18c0 1.06-.86 1.91-1.92 1.91H12v2.5a.5.5 0 01-1 0V15H9v2.5a.5.5 0 01-1 0V15H6.92A1.92 1.92 0 015 13.09V7.9C5 6.85 5.86 6 6.92 6H7V2.5zM8 6h4V3H8v3z" fill={primaryFill} /></svg>;
};

export default UsbPort20Filled;