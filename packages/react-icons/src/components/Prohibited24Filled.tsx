import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Prohibited24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm6.11 5.65L7.65 18.11A7.5 7.5 0 0018.11 7.65zM12 4.5a7.5 7.5 0 00-6.11 11.85L16.35 5.89A7.47 7.47 0 0012 4.5z" fill={primaryFill} /></svg>;
};

export default Prohibited24Filled;