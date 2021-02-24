import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ToggleRight48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M44 24a10 10 0 00-10-10H14a10 10 0 000 20h20a10 10 0 0010-10zm-5.5 0a5 5 0 11-10 0 5 5 0 0110 0z" fill={primaryFill} /></svg>;
};

export default ToggleRight48Filled;