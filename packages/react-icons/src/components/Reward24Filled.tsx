import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Reward24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 2c.97 0 1.75.78 1.75 1.75v3.04c0 1.03-.57 1.97-1.48 2.44l-6.3 3.29a5 5 0 11-4.44 0l-6.3-3.29A2.75 2.75 0 012 6.79V3.75C2 2.78 2.78 2 3.75 2h16.5zM12 13.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4-10H8v6.4l3.88 2.03c.08.04.16.04.24 0L16 9.9V3.5z" fill={primaryFill} /></svg>;
};

export default Reward24Filled;