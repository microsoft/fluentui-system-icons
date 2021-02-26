import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Home12Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 1.1a.5.5 0 01.6 0l4.12 3.2c.37.29.58.73.58 1.19V10a1 1 0 01-1 1H8a1 1 0 01-1-1V7H5v3a1 1 0 01-1 1H2a1 1 0 01-1-1V5.49c0-.46.21-.9.58-1.18l4.11-3.2zM6 2.14L2.2 5.1a.5.5 0 00-.2.4V10h2V7a1 1 0 011-1h2a1 1 0 011 1v3h2V5.49a.5.5 0 00-.2-.4L6 2.13z" fill={primaryFill} /></svg>;
};

export default Home12Regular;