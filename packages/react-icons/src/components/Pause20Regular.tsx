import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Pause20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-13C8 2.67 7.33 2 6.5 2h-2zm0 1h2c.28 0 .5.22.5.5v13a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M13.5 2c-.83 0-1.5.67-1.5 1.5v13c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-2zm0 1h2c.28 0 .5.22.5.5v13a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default Pause20Regular;