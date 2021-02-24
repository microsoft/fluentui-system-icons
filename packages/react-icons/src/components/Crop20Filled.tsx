import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Crop20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.75a.75.75 0 00-1.5 0V4.5H2.75a.75.75 0 000 1.5H4.5v6.75a2.75 2.75 0 002.75 2.75H14v1.75a.75.75 0 001.5 0V15.5h1.75a.75.75 0 000-1.5h-10C6.56 14 6 13.44 6 12.75v-10z" fill={primaryFill} /><path d="M14 7.25V13h1.5V7.25a2.75 2.75 0 00-2.75-2.75H7V6h5.75c.69 0 1.25.56 1.25 1.25z" fill={primaryFill} /></svg>;
};

export default Crop20Filled;