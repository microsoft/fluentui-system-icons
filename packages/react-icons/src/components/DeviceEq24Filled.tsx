import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DeviceEq24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a1 1 0 011 .88V20a1 1 0 01-2 .12V4a1 1 0 011-1zM8 6a1 1 0 011 .88V17a1 1 0 01-2 .12V7a1 1 0 011-1zm8 0a1 1 0 011 .88V17a1 1 0 01-2 .12V7a1 1 0 011-1zM4 9a1 1 0 011 .88V14a1 1 0 01-2 .12V10a1 1 0 011-1zm16 0a1 1 0 011 .88V14a1 1 0 01-2 .12V10a1 1 0 011-1z" fill={primaryFill} /></svg>;
};

export default DeviceEq24Filled;