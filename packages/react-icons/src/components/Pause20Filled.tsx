import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pause20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 01-1.5-1.5v-13z" fill={primaryFill} /><path d="M3 3.5C3 2.67 3.67 2 4.5 2h2C7.33 2 8 2.67 8 3.5v13c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 013 16.5v-13z" fill={primaryFill} /></svg>;
};

export default Pause20Filled;