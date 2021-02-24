import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Patient32Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 14a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4zm-6 12a1 1 0 100 2h12a1 1 0 100-2H10zM5 5.5A3.5 3.5 0 018.5 2h15A3.5 3.5 0 0127 5.5v21a3.5 3.5 0 01-3.5 3.5h-15A3.5 3.5 0 015 26.5v-21zM8.5 4C7.67 4 7 4.67 7 5.5V20h3v-3c0-1.1.9-2 2-2h8a2 2 0 012 2v3h3V5.5c0-.83-.67-1.5-1.5-1.5h-15zM7 26.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V22H7v4.5zM20 17h-8v3h8v-3z" fill={primaryFill} /></svg>;
};

export default Patient32Regular;