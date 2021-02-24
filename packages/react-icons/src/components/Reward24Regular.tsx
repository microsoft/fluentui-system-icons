import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Reward24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 2c.97 0 1.75.78 1.75 1.75v3.04c0 1.03-.57 1.97-1.48 2.44l-6.28 3.28a5 5 0 11-4.48 0L3.48 9.23A2.75 2.75 0 012 6.79V3.75C2 2.78 2.78 2 3.75 2h16.5zM12 13.48a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm3.5-9.98h-7v6.66l3.38 1.77c.08.04.16.04.24 0l3.38-1.77V3.5zM7 3.5H3.75a.25.25 0 00-.25.25v3.04c0 .47.26.9.67 1.11L7 9.38V3.5zm13.25 0H17v5.88l2.83-1.48c.41-.22.67-.64.67-1.1V3.74a.25.25 0 00-.25-.25z" fill={primaryFill} /></svg>;
};

export default Reward24Regular;