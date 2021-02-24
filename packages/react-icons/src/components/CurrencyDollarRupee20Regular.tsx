import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CurrencyDollarRupee20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 2c.28 0 .5.22.5.5v.54c1.7.24 3 1.7 3 3.46v1a.5.5 0 01-1 0v-1a2.5 2.5 0 00-2-2.45v5.63l.86.38A3.62 3.62 0 019 13.36v.13a3.5 3.5 0 01-3 3.46v.55a.5.5 0 01-1 0v-.55a3.5 3.5 0 01-3-3.46v-.99a.5.5 0 111 0v.99a2.5 2.5 0 002 2.45v-5.62l-.86-.38A3.63 3.63 0 012 6.63V6.5a3.5 3.5 0 013-3.46V2.5c0-.28.22-.5.5-.5zM3 6.5v.13c0 1.03.6 1.97 1.55 2.4l.45.2V4.05A2.5 2.5 0 003 6.5zm3 9.44a2.5 2.5 0 002-2.45v-.12c0-1.04-.6-1.97-1.55-2.4l-.45-.2v5.17z" fill={primaryFill} /><path d="M10 3.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10 6.5c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10 3.5c0-.28.22-.5.5-.5h3a3.5 3.5 0 110 7h-1.9l6.28 7.17a.5.5 0 01-.76.66l-7-8A.5.5 0 0110.5 9h3a2.5 2.5 0 000-5h-3a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default CurrencyDollarRupee20Regular;