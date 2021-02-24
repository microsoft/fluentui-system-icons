import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Doctor16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2.76a.5.5 0 00-.5.5v2.26a.5.5 0 01-.5.5h-2a.5.5 0 00-.5.5V9.5c0 .28.22.5.5.5h2c.28 0 .5.22.5.5v2c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-2c0-.28.22-.5.5-.5h2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5V3.26a.5.5 0 00-.5-.5h-3zm-1.5.5c0-.82.67-1.5 1.5-1.5h3c.83 0 1.5.68 1.5 1.5V5h1.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H11v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 015 12.5V11H3.5A1.5 1.5 0 012 9.5V6.52c0-.83.67-1.5 1.5-1.5H5V3.26z" fill={primaryFill} /></svg>;
};

export default Doctor16Regular;