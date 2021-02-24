import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Teddy24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 10.27a4 4 0 016.25-4.96 9.24 9.24 0 00-6.24 4.96zm11.34-4.96A3.99 3.99 0 0121.5 8c0 .84-.26 1.63-.7 2.27a9.24 9.24 0 00-6.26-4.96zm-7.91 14A7.19 7.19 0 013.5 13.5C3.5 9.36 7.3 6 12 6s8.5 3.36 8.5 7.5a7.19 7.19 0 01-3.13 5.81 5.5 5.5 0 00-10.74 0zM15 17.14c-.45-.4-.98-.7-1.54-.9-.17.44-.76.76-1.46.76s-1.3-.32-1.46-.76a4.5 4.5 0 00-3 3.65c1.3.7 2.82 1.11 4.46 1.11 1.64 0 3.16-.4 4.46-1.11A4.48 4.48 0 0015 17.14z" fill={primaryFill} /></svg>;
};

export default Teddy24Filled;