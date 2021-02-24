import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Bluetooth28Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.58 2.1a1 1 0 011.07.14l7 6a1 1 0 01-.01 1.53L15.56 14l5.08 4.23a1 1 0 01.01 1.53l-7 6A1 1 0 0112 25v-8.03l-3.36 2.8a1 1 0 11-1.28-1.54L12 14.37v-.73L7.36 9.77a1 1 0 011.28-1.54l3.36 2.8V3a1 1 0 01.58-.9zM14 12.7L18.45 9 14 5.17v7.52zm0 2.6v7.53L18.45 19 14 15.31z" fill={primaryFill} /></svg>;
};

export default Bluetooth28Filled;