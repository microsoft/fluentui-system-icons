import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Couch24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.25 10.75A2.75 2.75 0 0122 13.33v2.92c0 .92-.7 1.67-1.6 1.74l-.15.01H3.75c-.92 0-1.67-.7-1.74-1.6L2 16.24V13.5a2.75 2.75 0 015.42-.67l.03.17h9.1l.03-.17a2.75 2.75 0 012.67-2.08zM5.75 6h12.5c.92 0 1.67.7 1.74 1.6l.01.15v2.08A3.77 3.77 0 0015.81 12H8.2a3.75 3.75 0 00-4.2-2.17L4 7.75c0-.92.7-1.67 1.6-1.74L5.76 6z" fill={primaryFill} /></svg>;
};

export default Couch24Filled;