import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bluetooth20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.53 2.04c-.3.11-.5.4-.5.71v5.88l-1.8-1.46a.75.75 0 00-.95 1.16L8.34 10l-2.06 1.67a.75.75 0 10.94 1.16l1.82-1.46v5.88a.75.75 0 001.33.47l3.46-4.25a.75.75 0 00-.1-1.05l-3-2.42 3-2.42a.75.75 0 00.1-1.05l-3.46-4.25a.75.75 0 00-.84-.24zm1 9.73l1.66 1.34-1.65 2.03v-3.37zm0-3.54V4.86l1.66 2.03-1.65 1.34z" fill={primaryFill} /></svg>;
};

export default Bluetooth20Filled;