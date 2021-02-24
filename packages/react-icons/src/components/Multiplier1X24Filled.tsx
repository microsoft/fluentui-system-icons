import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Multiplier1X24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 7.9a1 1 0 00-1.85-.52l-.08.12c-.4.67-.84 1.4-2.08 2.14A1 1 0 007 11.36c.38-.23.7-.46.99-.69V16a1 1 0 102 0V7.9zm3.7 4.4a1 1 0 10-1.4 1.4l.79.8-.8.8a1 1 0 001.42 1.4l.79-.78.8.79a1 1 0 101.4-1.42l-.79-.79.8-.8a1 1 0 00-1.42-1.4l-.79.79-.8-.8z" fill={primaryFill} /></svg>;
};

export default Multiplier1X24Filled;