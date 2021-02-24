import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const VehicleSubway24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 3A3.75 3.75 0 0120 6.75v9a3.75 3.75 0 01-2.89 3.65l2.46 1.17a.75.75 0 01-.55 1.4l-.1-.04-5.09-2.43h-3.66l-5.1 2.43a.75.75 0 11-.64-1.36l2.46-1.17A3.75 3.75 0 014 15.75v-9A3.75 3.75 0 017.75 3h8.5zM8 15a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2zm.25-10.5h-8.5c-1.24 0-2.25 1-2.25 2.25v5.75h13V6.75c0-1.24-1-2.25-2.25-2.25zm-3 1.5a.75.75 0 010 1.5h-2.5a.75.75 0 010-1.5h2.5z" fill={primaryFill} /></svg>;
};

export default VehicleSubway24Filled;