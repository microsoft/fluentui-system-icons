import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PhoneLaptop20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H10v-1h5.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5V6H3V4.5z" fill={primaryFill} /><path d="M10 15h7.5a.5.5 0 000-1H10v1z" fill={primaryFill} /><path d="M5 15a.5.5 0 000 1h1a.5.5 0 000-1H5z" fill={primaryFill} /><path d="M2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v8c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-8zM3.5 8a.5.5 0 00-.5.5v8c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-4z" fill={primaryFill} /></svg>;
};

export default PhoneLaptop20Regular;